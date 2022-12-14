import productsRouter from '@modules/products/routes/product.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
