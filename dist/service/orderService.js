"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const order_1 = require("../entity/order");
class OrderService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(order_1.Order);
        this.showAllOrder = async () => {
            let listOrder = await this.userRepository.find({
                relations: {
                    Product: true,
                },
            });
            return listOrder;
        };
        this.findOneById = async (id) => {
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
        this.deleteOrderById = async (id) => {
            await this.userRepository.delete({
                idOrder: id,
            });
        };
    }
}
exports.default = new OrderService();
//# sourceMappingURL=orderService.js.map