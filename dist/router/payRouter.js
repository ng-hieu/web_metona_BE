"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payController_1 = __importDefault(require("../controller/payController"));
const payRouter = (0, express_1.Router)();
payRouter.get("/:id", payController_1.default.findPayById);
exports.default = payRouter;
//# sourceMappingURL=payRouter.js.map