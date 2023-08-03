import { Product } from "./../entity/product";
import { AppDataSource } from "../data-source";
import { Order } from "../entity/order";
class OrderService {
    private userRepository = AppDataSource.getRepository(Order);
    showAllOrder = async () => {
        let listOrder = await this.userRepository.find({
            relations: {
                Product: true,
            },
        });
        return listOrder;
    };
    findOneById = async (id) => {
        let order = await this.userRepository.findOne({
            where: {
                idOrder: id,
            },
            relations: {
                Product: true,
            },
        });
        return order;
    };

    deleteOrderById = async (id) => {
         await this.userRepository.delete({            
                idOrder: id,            
        });
    };
}
export default new OrderService();
