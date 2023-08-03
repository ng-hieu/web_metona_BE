import { Router } from "express";
import orderController from "src/controller/orderController";


const orderRouter = Router();
orderRouter.get("/", orderController.getAllOrder);
orderRouter.get("/order/:id", orderController.getOne);
orderRouter.delete("/order/:id", orderController.deleteOrderById);

export default orderRouter;
