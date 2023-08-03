"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("src/data-source");
const product_1 = require("src/entity/product");
class ProductService {
    constructor() {
        this.getAll = async (page, pageSize, getTotalCount = false) => {
            const skip = (page - 1) * pageSize;
            const take = pageSize;
            const [products, total] = await this.productRepository.findAndCount({
                relations: {
                    category: true
                },
                skip,
                take,
            });
            const totalPages = Math.ceil(total / pageSize);
            if (getTotalCount) {
                return {
                    products,
                    totalCount: total,
                    totalPages,
                };
            }
            else {
                return {
                    products,
                    totalPages
                };
            }
        };
        this.add = async (product) => {
            await this.productRepository.save(product);
        };
        this.editProduct = async (id, product) => {
            return await this.productRepository.update({ idProduct: id }, {
                nameProduct: product.nameProduct,
                priceProduct: product.priceProduct,
                quantityProduct: product.quantityProduct,
                descriptionProduct: product.descriptionProduct,
                image: product.image,
                category: product.category
            });
        };
        this.remove = async (id) => {
            let products = await this.productRepository.find({
                where: {
                    product: { idProduct: id }
                }
            });
            if (products) {
                await this.productRepository.delete({
                    where: {
                        products: { idProduct: id }
                    }
                });
            }
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map