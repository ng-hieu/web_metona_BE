import { District } from "./district";
import { Bill } from "./bill";
export declare class Wards {
    id: number;
    name: string;
    type: string;
    district: District;
    bill: Bill[];
}
