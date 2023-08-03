"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminServive_1 = __importDefault(require("../service/adminServive"));
class AdminController {
    constructor() {
        this.checkLogin = async (req, res) => {
            try {
                let admin = await adminServive_1.default.loginCheck(req.body);
                if (admin) {
                    res.status(200).json({
                        success: true,
                        data: admin.info,
                    });
                }
                else {
                    throw new Error("Wrong email or password");
                }
            }
            catch (e) {
                console.log(" error in login ", e);
                res.status(500).json({
                    message: "error in login",
                    success: false,
                });
            }
        };
    }
}
//# sourceMappingURL=adminController.js.map