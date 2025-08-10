export interface CreateBillResponse {
    // Флаг успешности запроса (например: true)
    success: boolean,
    // Ссылка на страницу с QR кодом (например: https://cardlink.link/link/5QWlqB2kKJ)
    link_url: string,
    // Ссылка на оплату (например: https://cardlink.link/transfer/5QWlqB2kKJ)
    link_page_url: string,
    // Уникальный идентификатор счета (например: 5QWlqB2kKJ)
    bill_id: string
}