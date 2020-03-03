import api from '../../services/api';
import getPartialName from '../../util/name';

class ItemController {
   async index(req, res) {
      const { id } = req.params;

      try {
         const [product, description] = await Promise.all([
            api.get(`/items/${id}`),
            api.get(`/items/${id}/description`),
         ]).catch(() => {
            throw new Error('Id does not found');
         });

         if (!product) {
            throw new Error('Product does not found');
         }

         if (!description) {
            throw new Error('Description does not exists');
         }

         const {
            seller_id,
            category_id,
            title,
            price,
            currency_id,
            available_quantity,
            pictures,
            condition,
            shipping: { free_shipping },
            sold_quantity,
         } = product.data;

         const { plain_text } = description.data;
         const picture = pictures[0].url;

         const [resp_seller, categ] = await Promise.all([
            api.get(`/users/${seller_id}`),
            api.get(`/categories/${category_id}`),
         ]).catch(() => {
            throw new Error('Id does not found');
         });

         const [...namePaths] = categ.data.path_from_root;

         const [name, lastname] = getPartialName(resp_seller.data.nickname);

         return res.json({
            id,
            author: {
               name,
               lastname,
            },
            item: {
               id: category_id,
               title,
               price: {
                  currency: currency_id,
                  amount: available_quantity,
                  decimals: price,
               },
               path: namePaths.map(namePath => namePath.name),
               picture,
               condition,
               free_shipping,
               sold_quantity,
               description: plain_text,
            },
         });
      } catch (err) {
         return res.status(404).json({ error: err.message });
      }
   }
}

export default new ItemController();
