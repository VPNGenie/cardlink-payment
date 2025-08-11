import type { CreateBillRequest } from "../../interfaces/request/create-bill.js";
import type { CreateBillResponse } from "../../interfaces/response/create-bill.js";
import type { CardLink } from "../../sdk.js";
export declare class Bill {
    private sdk;
    constructor(sdk: CardLink);
    create(options: CreateBillRequest): Promise<CreateBillResponse>;
}
//# sourceMappingURL=index.d.ts.map