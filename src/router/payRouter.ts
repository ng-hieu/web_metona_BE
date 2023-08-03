import { Router } from "express";
import payController from "../controller/payController";


const payRouter = Router();
payRouter.get("/:id", payController.findPayById);


export default payRouter;
