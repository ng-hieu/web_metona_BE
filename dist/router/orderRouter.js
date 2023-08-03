"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../controller/orderController"));
const orderRouter = (0, express_1.Router)();
orderRouter.get("/", orderController_1.default.getAllOrder);
orderRouter.get("/order/:id", orderController_1.default.getOne);
orderRouter.delete("/order/:id", orderController_1.default.deleteOrderById);
exports.default = orderRouter;
//# sourceMappingURL=orderRouter.js.map