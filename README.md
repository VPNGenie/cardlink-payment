SDK для работы с API cardlink.link

# Использование
## TypeScript
```typescript
import { CardLink, Currency, paymentPockback } from "cardlink-payment";

const sdk = new CardLink('apiKey', 'shopId');

// Создать счет на оплату
const bill = await sdk.Bill.create({
    amount: 100,
    order_id: 'myOrderId',
    currency_in: Currency.RUB,
});
```

## Postback
### Payment
Postback уведомление о выполнении платежа 
```typescript
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