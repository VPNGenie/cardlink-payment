SDK для работы с API cardlink.link

# Использование
## TypeScript
```
import { CardLink, Currency } from "cardlink-payment";

const sdk = new CardLink('apiKey', 'shopId');

// Создать счет на оплату
const bill = await sdk.Bill.create({
    amount: 100,
    order_id: 'myOrderId',
    currency_in: Currency.RUB,
});
```