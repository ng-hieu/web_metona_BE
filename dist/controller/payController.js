"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payService_1 = __importDefault(require("../service/payService"));
class PayController {
    constructor() {
        this.findPayById = async (req, res) => {
            try {
                let pay = await payService_1.default.findOneByIdPay(req.params.idPay);
                res.status(200).json({
                    success: true,
                    data: pay,
                });
            }
            catch (e) {
                console.log(" error in findPayById", e);
                res.status(500).json({
                    message: "error you are anonymous",
                    success: false,
                });
            }
        };
    }
}
exports.default = new PayController();
//# sourceMappingURL=payController.js.map