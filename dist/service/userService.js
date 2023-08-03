"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const user_1 = require("../entity/user");
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        this.findBillByPhoneNumber = async (phoneNumber) => {
            let bill = await this.userRepository.find({
                where: [{ phoneNumber: phoneNumber }],
            });
            return bill;
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map