import type { Currency } from "../../enums/currency.js";
import type { PaymentMethod } from "../../enums/payment-method.js";
import type { StatusPayment } from "../../enums/status-payment.js";
export interface PaymentPostbackResponse {
    InvId: string;
    OutSum: number;
    Commission: number;
    TrsId: string;
    Status: StatusPayment;
    CurrencyIn: Currency;
    custom?: string;
    AccountType?: PaymentMethod;
    AccountNumber?: string;
    BalanceAmount?: number;
    BalanceCurrency?: Currency;
    ErrorCode?: BigInteger;
    ErrorMessage?: string;
    SignatureValue: string;
}
//# sourceMappingURL=payment-postback.d.ts.map