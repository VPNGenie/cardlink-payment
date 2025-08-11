import { type AxiosInstance } from "axios";
import { Bill } from "./api/index.js";
export declare class CardLink {
    private token;
    private shop_id;
    connector: AxiosInstance;
    private baseURL;
    private version;
    Bill: Bill;
    constructor(token: string, shop_id: string);
    getShopId(): string;
}
//# sourceMappingURL=sdk.d.ts.map