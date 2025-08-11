export class Bill {
    sdk;
    constructor(sdk) {
        this.sdk = sdk;
    }
    async create(options) {
        return this.sdk.connector.post('/create', { ...options, shop_id: this.sdk.getShopId() })
            .then(response => response.data);
    }
}
//# sourceMappingURL=index.js.map