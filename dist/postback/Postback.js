import { verifyPostbackSignature } from "./verifier.js";
import { StatusPayment } from "../enums/status-payment.js";
export function paymentPockback(options) {
    const { onUnderPaid, onOverPaid, onFailed, onSuccess, secret } = options;
    return async (req, res) => {
        const body = req.body;
        if (!verifyPostbackSignature(body, secret)) {
            return res.status(400).send('Invalid signature');
        }
        try {
            if (body.Status === StatusPayment.SUCCESS && onSuccess)
                await onSuccess(body);
            else if (body.Status === StatusPayment.FAIL && onFailed)
                await onFailed(body);
            else if (body.Status === StatusPayment.OVERPAID && onOverPaid)
                await onOverPaid(body);
            else if (body.Status === StatusPayment.UNDERPAID && onUnderPaid)
                await onUnderPaid(body);
            res.status(200).send('Ok');
        }
        catch (error) {
            console.error('Postback handler error', error);
            res.status(500).send('Internal error');
        }
    };
}
//# sourceMappingURL=Postback.js.map