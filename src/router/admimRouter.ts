import { Router } from "express";
import adminController from "src/controller/adminController";
const adminRouter=Router();
adminRouter.post("/adminLogin", adminController.checkLogin);
export default adminRouter;