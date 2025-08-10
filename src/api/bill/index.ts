import type { CreateBillRequest } from "../../interfaces/request/create-bill.js";
import type { CreateBillResponse } from "../../interfaces/response/create-bill.js";
import type { CardLink } from "../../sdk.js";

export class Bill {
    constructor (private sdk: CardLink) {}

    public async create (options: CreateBillRequest): Promise<CreateBillResponse> {
        return this.sdk.connector.post('/create', { ...options, shop_id: this.sdk.getShopId() })
            .then(response => response.data);
    }
}