import type { Request, Response } from "express";
import type { PaymentPostbackResponse } from "../interfaces/response/payment-postback.js";
import { verifyPostbackSignature } from "./verifier.js";
import { StatusPayment } from "../enums/status-payment.js";

export interface PaymentPostbackOptions {
    secret: string;
    onUnderPaid?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onOverPaid?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onFailed?: (data: PaymentPostbackResponse) => Promise<void> | void;
    onSuccess?: (data: PaymentPostbackResponse) => Promise<void> | void;
}

export function paymentPockback (options: PaymentPostbackOptions) {
    const { 
        onUnderPaid, 
        onOverPaid, 
        onFailed, 
        onSuccess, 
        secret
    } = options;

    return async (req: Request, res: Response) => {
        const body = req.body as PaymentPostbackResponse;

        if (!verifyPostbackSignature(body, secret)) {
            return res.status(400).send('Invalid signature')
        }

        try {
            if (body.Status === StatusPayment.SUCCESS && onSuccess) await onSuccess(body);
            else if (body.Status === StatusPayment.FAIL && onFailed) await onFailed(body);
            else if (body.Status === StatusPayment.OVERPAID && onOverPaid) await onOverPaid(body); 
            else if (body.Status === StatusPayment.UNDERPAID && onUnderPaid) await onUnderPaid(body); 

            res.status(200).send('Ok');
        } catch (error) {
            console.error('Postback handler error', error);
            res.status(500).send('Internal error')
        }
    }
}