import { AppDataSource } from "src/data-source";

import { Pay } from "src/entity/pay";

class PayService {
    private userRepository = AppDataSource.getRepository(Pay);
    findOneByIdPay = async (id) => {
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
export default new PayService();
