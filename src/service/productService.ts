import { Category } from './../entity/categogy';
import { AppDataSource } from "../data-source";
import { Product } from "../entity/product";

class ProductService {
    private productRepository;
    constructor() {
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async (page, pageSize, getTotalCount = false) => {
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
            }
        } else {
            return {
                products,
                totalPages
            }
        }
    }

    add = async (product) => {
        await this.productRepository.save(product);
    }
    editProduct = async (id, product) => {
        return await this.productRepository.update(
            { idProduct: id },
            {
                nameProduct: product.nameProduct,
                priceProduct: product.priceProduct,
                quantityProduct: product.quantityProduct,
                descriptionProduct: product.descriptionProduct,
                image: product.image,
                category: product.category
            }
        );
    }

    remove = async (id) => {
            await this.productRepository.delete({
              idProduct: id    
            }) 
    }
    findProductByName = async (name) => {
        let product = await this.productRepository.findOneBy(
            { nameProduct: name })
        return product[0]
    }
}
export default new ProductService();