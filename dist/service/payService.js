"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const pay_1 = require("../entity/pay");
class PayService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(pay_1.Pay);
        this.findOneByIdPay = async (id) => {
            let pay = await this.userRepository.findOne({
                where: {
                    idPay: id,
                },
                relations: {
                    bill: true,
                },
            });
            return pay;
        };
    }
}
exports.default = new PayService();
//# sourceMappingURL=payService.js.map