import { Router } from "express";
import adminController from "../controller/adminController";
const adminRouter=Router();
adminRouter.post("/adminLogin", adminController.checkLogin);
export default adminRouter;