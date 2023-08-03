<<<<<<< HEAD
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const router = (0, express_1.Router)();
router.use('product', productRouter_1.default);
>>>>>>> ab27217ba34f0a06fea9fe05f6832fa8aa4c7770
//# sourceMappingURL=router.js.map