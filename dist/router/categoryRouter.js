"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = __importDefault(require("../controller/categoryController"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.get('/', categoryController_1.default.findAllCategory);
categoryRouter.post('/', categoryController_1.default.addCategory);
categoryRouter.delete('/:id', categoryController_1.default.removeCategory);
exports.default = categoryRouter;
//# sourceMappingURL=categoryRouter.js.map