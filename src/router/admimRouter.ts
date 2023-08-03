import { Router } from "express";
import adminController from "../controller/adminController";
import { auth } from "../middleware/auth";
const adminRouter=Router();

adminRouter.post('/', adminController.create)
adminRouter.post("/login", adminController.checkLogin);


export default adminRouter;