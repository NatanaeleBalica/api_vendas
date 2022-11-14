import productsRouter from '@modules/products/routes/product.routes';
import { Router } from 'express';

const routers = Router();

routers.use('products', productsRouter);

export default routers;
