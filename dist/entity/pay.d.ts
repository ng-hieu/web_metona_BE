import { Bill } from './bill';
import { Payment } from './payment';
export declare class Pay {
    idPay: number;
    bill: Bill;
    money: number;
    timeCurrent: string;
    payment: Payment;
}
