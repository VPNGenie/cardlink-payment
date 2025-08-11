import type { CreateBillRequest } from "../../interfaces/request/create-bill.js";
import type { StatusBillRequest } from "../../interfaces/request/status-bill.js";
import type { CreateBillResponse } from "../../interfaces/response/create-bill.js";
import type { StatusBillResponse } from "../../interfaces/response/status-bill.js";
import type { CardLink } from "../../sdk.js";

export class Bill {
    constructor (private sdk: CardLink) {}

    public async create (options: CreateBillRequest): Promise<CreateBillResponse> {
        return this.sdk.connector.post('/create', { ...options, shop_id: this.sdk.getShopId() })
            .then(response => response.data);
    }

    public async checkInvoiceStatus (options: StatusBillRequest): Promise<StatusBillResponse> {
        return this.sdk.connector.get('/status', { params: { ...options } })
            .then(response => response.data);
    }
}