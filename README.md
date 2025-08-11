SDK для работы с API cardlink.link

# Использование
Установка
```
npm i cardlink-payment
```
## TypeScript
```typescript
import { CardLink, Currency, Status } from "cardlink-payment";

const sdk = new CardLink('apiKey', 'shopId');

/** Создать счет на оплату */
const bill = await sdk.Bill.create({
    amount: 100,
    order_id: 'myOrderId',
    currency_in: Currency.RUB,
});

/** Проверка статуса счета */
const status = sdk.Bill.checkInvoiceStatus({ id: 'LXZv3R7Q8B' });
if (status.status === Status.NEW) {
    // ToDo...
}
```

## Postback
### Payment
Postback уведомление о выполнении платежа 
```typescript
import Express from "express";
import { paymentPockback } from "cardlink-payment";
const app = Express()
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/postback', paymentPockback({
    secret: 'mySecret',
    onFailed(data) {
        // Оплата не прошла
    },
    onSuccess(data) {
        // Оплата прошла
    },
    onOverPaid(data) {
        // Платеж переплаченный
    },
    onUnderPaid(data) {
        // Платеж недоплачивают
    },
}))
```