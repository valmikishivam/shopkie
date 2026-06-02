import express from 'express'
import { getProducts, relatedProducts, searchProducts, singleProduct } from '../controller/productController.js';
const router = express.Router();

router.get('/products',getProducts)
router.get('/products/:id',singleProduct)
router.get('/related',relatedProducts);
router.get('/search',searchProducts)
export default router;