"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controller/adminController"));
const adminRouter = (0, express_1.Router)();
adminRouter.post("/adminLogin", adminController_1.default.checkLogin);
exports.default = adminRouter;
//# sourceMappingURL=admimRouter.js.map