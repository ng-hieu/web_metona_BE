import { Order } from "../entity/order";
declare class OrderService {
    private userRepository;
    showAllOrder: () => Promise<Order[]>;
    findOneById: (id: any) => Promise<Order>;
    deleteOrderById: (id: any) => Promise<void>;
}
declare const _default: OrderService;
export default _default;
