import api from '../../services/api';
import getPartialName from '../../util/name';

class ItemController {
   async index(req, res) {
      const { id } = req.params;

      const [product, description] = await Promise.all([
         api.get(`/items/${id}`),
         api.get(`/items/${id}/description`),
      ]).catch(err => {
         return res.status(404).json({ error: 'Id does not found' });
      });

      if (!product) {
         return res.status(404).json({ error: 'Prod' });
      }

      if (!description) {
         return res.status(404).json({ error: 'Description does not exists' });
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

      const resp_seller = await api.get(`/users/${seller_id}`).catch(err => {
         return res.status(404).json({ error: 'Id seller does not found' });
      });

      if (!resp_seller) {
         return res.status(404).json({ error: 'Id seller does not exists' });
      }

      const [name, lastname] = getPartialName(resp_seller.data.nickname);

      return res.json({
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
            picture,
            condition,
            free_shipping,
            sold_quantity,
            description: plain_text,
         },
      });
   }
}

export default new ItemController();