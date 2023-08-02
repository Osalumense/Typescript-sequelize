import express from "express"
import controller from "../controllers/AuthController"
import { verifyToken } from "../middlewares/auth"
const router = express.Router();

router
    .route('/register').post(controller.registerUser)


export default router;