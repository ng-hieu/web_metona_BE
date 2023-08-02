import { City } from "./city";
import { District } from "./district";
import { Wards } from "./ward";
export declare class Bill {
    idBill: number;
    name: string;
    phone: string;
    email: string;
    status: boolean;
    totalPrice: number;
    totalQuantity: number;
    city: City;
    district: District;
    wards: Wards;
}