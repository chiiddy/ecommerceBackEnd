import express from 'express';
import createUsers from '../accounts/createUsers.js';
import loginUser from '../accounts/loginUser.js';


const router = express.Router();

router.post("/create-user", createUsers);
router.post("/login", loginUser);

export default router;