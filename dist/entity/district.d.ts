import { City } from "./city";
import { Wards } from "./ward";
import { Bill } from "./bill";
export declare class District {
    id: number;
    name: string;
    type: string;
    city: City;
    wards: Wards[];
    bill: Bill[];
}
