import axios, { type AxiosInstance } from "axios";
import { Bill } from "./api/index.js";

export class CardLink {
    public connector: AxiosInstance
    // URL api
    private baseURL: string = 'https://cardlink.link/api';
    // Версия api
    private version: string = 'v1';

    public Bill: Bill;

    constructor (private token: string, private shop_id: string) {
        this.connector = axios.create({
            baseURL: `${this.baseURL}/${this.version}`,
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });

        this.Bill = new Bill(this);
    }

    public getShopId(): string {
        return this.shop_id;
    }
}