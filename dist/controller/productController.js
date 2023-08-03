"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                const page = +req.query.page || 1;
                const pageSize = req.query.pageSize || 10;
                const result = await productService_1.default.getAll(page, pageSize, true);
                res.status(200).json(result);
            }
            catch (e) {
                console.log("error in findAll:", e);
                res.status(500).json({
                    message: 'error in findAll',
                    success: false
                });
            }
        };
        this.addProduct = async (req, res) => {
            try {
                const productName = req.body.productName;
                const product = await productService_1.default.findProductByName(productName);
                if (product) {
                    res.status(400).json({
                        message: 'Product name already exists'
                    });
                    return;
                }
                await productService_1.default.add(req.body);
                res.status(201).json({
                    message: 'OK'
                });
            }
            catch (e) {
                console.log("error in addProduct:", e);
                res.status(500).json({
                    message: 'Error in addProduct',
                    success: false
                });
            }
        };
        this.editProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let product = req.body;
                await productService_1.default.editProduct(id, product);
                res.status(200).json({ message: "edit successfully" });
            }
            catch (e) {
                console.log("error in editProduct:", e);
                res.status(500).json({
                    message: 'error in editProduct',
                    success: false
                });
            }
        };
        this.remove = async (req, res) => {
            try {
                let id = req.params.id;
                await productService_1.default.remove(id);
                res.status(200).json({
                    message: 'Delete success'
                });
            }
            catch (e) {
                console.log("error in removeProduct:", e);
                res.status(500).json({
                    message: 'error in removeProduct',
                    success: false
                });
            }
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map