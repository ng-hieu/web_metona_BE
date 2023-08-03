"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRouter_1 = __importDefault(require("./productRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const orderRouter_1 = __importDefault(require("./orderRouter"));
const admimRouter_1 = __importDefault(require("./admimRouter"));
const userRouter_1 = __importDefault(require("./userRouter"));
const payRouter_1 = __importDefault(require("./payRouter"));
const policyRouter_1 = __importDefault(require("./policyRouter"));
const router = (0, express_1.default)();
router.use('/products', productRouter_1.default);
router.use('/category', categoryRouter_1.default);
router.use('/adminManage', admimRouter_1.default);
router.use('/user', userRouter_1.default);
router.use("/orders", orderRouter_1.default);
router.use("/pays", payRouter_1.default);
router.use("/policy", policyRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map