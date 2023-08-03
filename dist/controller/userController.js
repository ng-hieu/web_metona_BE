"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    constructor() {
        this.findBillByPhoneNumber = async (req, res) => {
            try {
                let bills = await userService_1.default.findBillByPhoneNumber(req.body.phoneNumber);
                res.status(200).json({
                    success: true,
                    data: bills,
                });
            }
            catch (e) {
                console.log(" error in findBillByPhoneNumber", e);
                res.status(500).json({
                    message: "error you are anonymous",
                    success: false,
                });
            }
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map