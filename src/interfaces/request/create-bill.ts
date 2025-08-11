import { BillType } from "../../enums/bill-type.js";
import { Currency } from "../../enums/currency.js";
import { PayerPaysCommission } from "../../enums/payer-pays-commission.js";
import { PaymentMethod } from "../../enums/payment-method.js";

export interface CreateBillRequest {
    // Сумма счета на оплату (например: 380.99)
    amount: number,
    // Уникальный идентификатор заказа. Будет возвращен в postback (например: order-285394168)
    order_id?: string,
    // Описание платежа (например: Order #285394168)
    description?: string,
    // Тип платежа. Одноразовый или многоразовый. Если выбран одноразовый, то второй раз оплатить не получится (например: normal)
    type?: BillType,
    // Валюта, в которой оплачивается счет. Если не передана, то используется валюта магазина. Если shop_id не определен, то используется RUB (например: RUB)
    currency_in?: Currency,
    // Произвольное поле. Будет возвращено в postback (например: my-custom-string)
    custom?: string,
    // Параметр, который указывает на то, кто будет оплачивать комиссию за входящий платёж (например: 1)
    payer_pays_commission?: PayerPaysCommission
    // Параметр, который заполняет email клиента на платёжной странице (например: payer@email.com)
    payer_email?: string,
    // Название ссылки. Укажите, за что принимаете средства. Этот текст будет отображен в платежной форме (например: Donation)
    name?: string,
    // Время жизни счета на оплату в секундах (например: 600)
    ttl?: bigint,
    // Страница успешной оплаты.
    success_url?: string,
    // Страница неуспешной оплаты.
    fail_url?: string,
    // Если указан этот параметр, то при переходе на платежную форму этот способ оплаты будет выбран автоматически, без возможности выбора другого способ оплаты.
    payment_method?: PaymentMethod,
    request_fileds?: {
        // Обязательный запрос электронной почты у плательщика (например: false)
        email?: boolean,
        // Обязательный запрос номера телефона у плательщика (например: false)
        phone?: boolean,
        // Обязательный запрос ФИО у плательщика (например: false)
        name?: boolean,
        // Обязательный запрос комментария у плательщика (например: false)
        comment?: boolean
    }
    // Список товаров (например: items[0][name]="Digital Item")
    items?: any[],
}