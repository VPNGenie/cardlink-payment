import type { Currency } from "../../enums/currency.js";
import type { Status } from "../../enums/status.js";

export interface StatusBillResponse {
    // Уникальный идентификатор счета (например: jZqmaPvl9W)
    id: string,
    // Уникальный идентификатор заказа на вашей стороне (например: order-285394168)
    order_id: string,
    // Флаг активности счета (например: true)
    active: boolean,
    // Статус счета (например: NEW)
    status: Status,
    // Сумма, на которую выставлен счет (например: 24600.05)
    amount: number,
    // Тип счета (например: MULTI)
    type: 'MULTI' | 'NORMAL',
    // Дата и время создания счета (например: 2025-08-11 20:55:00)
    created_at: Date,
    // Валюта, в которой оплачивается счет (например: USD)
    currency_in: Currency,
    // Время жизни счета на оплату в секундах. (например: 600)
    ttl: number,
    // Флаг успешности запроса (например: true)
    success: boolean
}