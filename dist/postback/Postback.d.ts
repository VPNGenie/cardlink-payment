import type { Request, Response } from "express";
import type { PaymentPostbackResponse } from "../interfaces/response/payment-postback.js";
export interface PaymentPostbackOptions {
    secret: string;
    onUnderPaid?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onOverPaid?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onFailed?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onSuccess?: (data: PaymentPostbackResponse) => Promise<void> | void;
}
export declare function paymentPockback(options: PaymentPostbackOptions): (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=Postback.d.ts.map