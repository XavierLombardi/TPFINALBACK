import { Router } from 'express';
import { searchProducts } from '../controllers/product.controller';

const router = Router();
router.get('/search', searchProducts);
// ...tus rutas CRUD existentes
export default router;
