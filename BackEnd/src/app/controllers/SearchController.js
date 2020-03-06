import api from '../../services/api';
import getPartialName from '../../util/name';
import rand from '../../util/random';

class ItemController {
   async index(req, res) {
      const { search, page = 0, random } = req.query;
      const limit = 5;

      try {
         const resp = await api
            .get(`/sites/MLA/search?q=${search}`)
            .catch(() => {
               throw new Error('Product does not found');
            });

         if (!resp) {
            return res.status(401).json({ error: 'Search not Found' });
         }

         const { results } = resp.data;

         let resu;

         // se random for true, consulta produtos aleatorios... se nao, consulta por paginas
         if (random) {
            resu = rand(results, 5);
         } else {
            resu = results.slice(page * limit, page * limit + limit);
         }

         // Remove items duplicados
         const newResults = [...new Set(resu)];

         // Buscando a categoria e author de cada produto atravez da api
         const responseCategory = await Promise.all(
            newResults.map(async result => {
               const promisseCategory = await api
                  .get(`/categories/${result.category_id}`)
                  .catch(() => {
                     throw new Error('Id categories does not found');
                  });
               const promisseSeller = await api
                  .get(`/users/${result.seller.id}`)
                  .catch(() => {
                     throw new Error('Id seller does not found');
                  });
               return { promisseCategory, promisseSeller };
            })
         );

         // Armazenando cada categoria e author em um array
         const [...CategSeller] = responseCategory;

         // Buscando o nome de cada categoria e author em seus caminhos
         const categAndSeller = CategSeller.map(categ => {
            return {
               seller: getPartialName(categ.promisseSeller.data.nickname),
               categories: categ.promisseCategory.data.name,
            };
         });

         if (!categAndSeller) {
            return res
               .status(400)
               .json({ error: 'Not possible consult categories' });
         }

         // estruturando o return
         const items = newResults.map((result, index) => {
            return {
               id: result.id,
               title: result.title,
               categories: categAndSeller[index].categories,
               seller: {
                  name: categAndSeller[index].seller[0],
                  lastname: categAndSeller[index].seller[1],
               },
               price: {
                  currency: result.currency_id,
                  amount: result.available_quantity,
                  decimals: result.price,
               },
               city: result.address.city_name,
               picture: result.thumbnail,
               condition: result.condition,
               free_shiping: result.shipping.free_shipping,
            };
         });

         return res.json(items);
      } catch (err) {
         return res.status(404).json({ error: err.message });
      }
   }
}

export default new ItemController();
