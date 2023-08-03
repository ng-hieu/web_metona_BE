import { Pay } from "../entity/pay";
declare class PayService {
    private userRepository;
    findOneByIdPay: (id: any) => Promise<Pay>;
}
declare const _default: PayService;
export default _default;
