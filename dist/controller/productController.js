"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("src/service/productService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            const page = +req.query.page || 1;
            const pageSize = req.query.pageSize || 10;
            const result = await productService_1.default.getAll(page, pageSize, true);
            res.status(200).json(result);
        };
        this.addProduct = async (req, res) => {
            await productService_1.default.add(req.body);
            if (!req.body.name) {
                res.status(400).json({
                    message: 'name missing'
                });
                res.end();
            }
            else {
                res.status(201).json({
                    message: 'OK'
                });
            }
        };
        this.editProduct = async (req, res) => {
            let id = req.params.id;
            let product = req.body;
            await productService_1.default.editProduct(id, product);
            res.status(200).json({ message: "edit successfully" });
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await productService_1.default.remove(id);
            res.status(200).json({
                message: 'Delete success'
            });
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map