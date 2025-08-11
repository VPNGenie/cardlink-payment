import type { Currency } from "../../enums/currency.js";
import type { PaymentMethod } from "../../enums/payment-method.js";
import type { StatusPayment } from "../../enums/status-payment.js";

export interface PaymentPostbackResponse {
    // Уникальный идентификатор заказа, переданный при формировании счета (например: payment-19238465)
    InvId: string,
    // Сумма платежа (например: 380.55)
    OutSum: number,
    // Комиссия с платежа (например: 30.55)
    Commission: number,
    // Уникальный идентификатор платежа (например: LXZv3R7Q8B)
    TrsId: string,
    // Статус платежа (например: SUCCESS)
    Status: StatusPayment,
    // Валюта, в которой оплачивался счет (например: RUB)
    CurrencyIn: Currency,
    // Произвольное поле, переданное при формировании счета (например: additional_information)
    custom?: string,
    // Метод оплаты (например: BANK_CARD)
    AccountType?: PaymentMethod,
    // Дополнительная информация о методе оплаты (например: 220220******7046)
    AccountNumber?: string,
    // Сумма, которая зачислена на баланс (например: 350.00)
    BalanceAmount?: number,
    // Валюта, в которой было зачисление денежных средств на баланс (например: RUB)
    BalanceCurrency?: Currency,
    // Код ошибки (например: 666)
    ErrorCode?: BigInteger,
    // Описание ошибки (например: General error)
    ErrorMessage?: string,
    // Подпись запроса. Формируется следующим образом: strtoupper(md5($OutSum . ":" . $InvId . ":" . $apiToken)) (например: DC32D403CE6BD2E54D4D213278DB286C)
    SignatureValue: string
}