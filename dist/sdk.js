import axios, {} from "axios";
import { Bill } from "./api/index.js";
export class CardLink {
    token;
    shop_id;
    connector;
    // URL api
    baseURL = 'https://cardlink.link/api';
    // Версия api
    version = 'v1';
    Bill;
    constructor(token, shop_id) {
        this.token = token;
        this.shop_id = shop_id;
        this.connector = axios.create({
            baseURL: `${this.baseURL}/${this.version}`,
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
        this.Bill = new Bill(this);
    }
    getShopId() {
        return this.shop_id;
    }
}
//# sourceMappingURL=sdk.js.map