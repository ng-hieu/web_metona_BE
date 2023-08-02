import { Category } from './../entity/categogy';
import { AppDataSource } from "src/data-source";
import { Product } from "src/entity/product";

class ProductService{
    private productRepository;
    constructor(){
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAll = async (page, pageSize, getTotalCount=false)=>{
        const skip = (page -1)* pageSize;
        const take = pageSize;

        const [products,total]= await this.productRepository.findAndCount({
            relations:{
                category:true
            },
            skip,
            take,
        });
        const totalPages = Math.ceil(total/pageSize);
        if(getTotalCount){
            return {
                products,
                totalCount: total,
                totalPages,
            }
        } else {
            return{
                products,
                totalPages
            }
        }
    }

    add = async (product)=>{
        await this.productRepository.save(product);
    }
    editProduct = async (id, product)=>{
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

    remove = async (id)=>{
        let products = await this.productRepository.find(
           {
            where:{
                product:{idProduct:id}
            }
           }
        )
        if(products){
            await this.productRepository.delete({
                where:{
                    products:{idProduct:id}
                }
            })
        }
    }
}
export default new ProductService();