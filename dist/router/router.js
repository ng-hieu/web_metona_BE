"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./productRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const router = (0, express_1.default)();
router.use('/products', productRouter_1.default);
router.use('/category', categoryRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map