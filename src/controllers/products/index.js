import express from 'express';
import createProducts from '../products/createProducts.js';
import allProducts from './allProducts.js';
import auth from '../../middleware/auth.js'



const router = express.Router();

router.post("/create-products", auth, createProducts);
router.get("/all-products", allProducts);


export default router;