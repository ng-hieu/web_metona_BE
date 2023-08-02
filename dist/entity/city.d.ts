import { District } from "./district";
import { Bill } from "./bill";
export declare class City {
    id: number;
    name: string;
    type: string;
    slug: string;
    district: District[];
    bill: Bill[];
}
