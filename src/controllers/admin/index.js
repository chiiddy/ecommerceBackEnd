import express from 'express';
import createAdmin from './createAdmin.js';
import logginAdmin from './loginAdmin.js';

const router = express.Router();

router.post("/create-admin", createAdmin);
router.post("/logging-admin", logginAdmin)

export default router;