import express from 'express';
import accounts from "../controllers/accounts/index.js";
import products from '../controllers/products/index.js';
import admin from '../controllers/admin/index.js'


const router = express.Router()

router.use("/accounts", accounts);
router.use("/products", products);
router.use("/admin", admin)


export default router;