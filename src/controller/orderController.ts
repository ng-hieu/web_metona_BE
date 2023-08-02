import { Request, Response } from "express";
import adminServive from "src/service/adminServive";
import orderService from "src/service/orderService";
class OrderController {
    getAllOrder = async (req: Request, res: Response) => {
        try {
            let listsOrder = await orderService.showAllOrder();

            if (listsOrder) {
                res.status(200).json({
                    success: true,
                    data: listsOrder,
                });
            } else {
                throw new Error("you are not allowed to");
            }
        } catch (e) {
            console.log(" error in showAll ListOrder ", e);
            res.status(500).json({
                message: "error in showAll ListOrder",
                success: false,
            });
        }
    };
    getOne = async (req: Request, res: Response) => {
        try {
            let order = await orderService.findOneById(req.params.idOrderId);
            res.status(200).json({
                success: true,
                data: order,
            });
        } catch (e) {
            console.log(" error in getOne order", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };

    deleteOrderById = async (req: Request, res: Response) => {
        try {
             await orderService.deleteOrderById(
                req.params.idOrderId
            );
            res.status(200).json({
                success: true,
                message: "delete order successfully",
            });
        } catch (e) {
            console.log(" error in deleteOrderById ", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };
}
