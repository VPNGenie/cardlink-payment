import { BillType } from "../../enums/bill-type.js";
import { Currency } from "../../enums/currency.js";
import { PayerPaysCommission } from "../../enums/payer-pays-commission.js";
import { PaymentMethod } from "../../enums/payment-method.js";
export interface CreateBillRequest {
    amount: number;
    order_id?: string;
    description?: string;
    type?: BillType;
    currency_in?: Currency;
    custom?: string;
    payer_pays_commission?: PayerPaysCommission;
    payer_email?: string;
    name?: string;
    ttl?: bigint;
    success_url?: string;
    fail_url?: string;
    payment_method?: PaymentMethod;
    request_fileds?: {
        email?: boolean;
        phone?: boolean;
        name?: boolean;
        comment?: boolean;
    };
    items?: any[];
}
//# sourceMappingURL=create-bill.d.ts.map