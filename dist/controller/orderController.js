"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orderService_1 = __importDefault(require("../service/orderService"));
class OrderController {
    constructor() {
        this.getAllOrder = async (req, res) => {
            try {
                let listsOrder = await orderService_1.default.showAllOrder();
                if (listsOrder) {
                    res.status(200).json({
                        success: true,
                        data: listsOrder,
                    });
                }
                else {
                    throw new Error("you are not allowed to");
                }
            }
            catch (e) {
                console.log(" error in showAll ListOrder ", e);
                res.status(500).json({
                    message: "error in showAll ListOrder",
                    success: false,
                });
            }
        };
        this.getOne = async (req, res) => {
            try {
                let order = await orderService_1.default.findOneById(req.params.idOrderId);
                res.status(200).json({
                    success: true,
                    data: order,
                });
            }
            catch (e) {
                console.log(" error in getOne order", e);
                res.status(500).json({
                    message: "error you are anonymous",
                    success: false,
                });
            }
        };
        this.deleteOrderById = async (req, res) => {
            try {
                await orderService_1.default.deleteOrderById(req.params.idOrderId);
                res.status(200).json({
                    success: true,
                    message: "delete order successfully",
                });
            }
            catch (e) {
                console.log(" error in deleteOrderById ", e);
                res.status(500).json({
                    message: "error you are anonymous",
                    success: false,
                });
            }
        };
    }
}
exports.default = new OrderController();
//# sourceMappingURL=orderController.js.map