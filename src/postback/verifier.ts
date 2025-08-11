import crypto from "crypto";

export function verifyPostbackSignature (
    data: Record<string, any>, 
    secret: string
) : boolean {
    if (!data || typeof data !== 'object') return false;
    if (!secret) {
        throw new Error('Postback secret is required.');
    }

    const payload = `${data.OutSum}:${data.InvId}:${secret}`;

    const expected = crypto.createHash('md5').update(payload).digest('hex').toUpperCase();

    return expected === data.SignatureValue.toUpperCase();
}