import { User } from "../entity/user";
declare class UserService {
    private userRepository;
    findBillByPhoneNumber: (phoneNumber: any) => Promise<User[]>;
}
declare const _default: UserService;
export default _default;
