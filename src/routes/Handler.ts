import { Request } from "koa";
import Item from "../model/item";
import DBInitializer from "../repository/db";
export default class ProductHandler {
    private db:DBInitializer;
    constructor(db:DBInitializer){
        this.db = db;
    }
    public async handleCreateRequest(body: any) {
        const item = <Item>(body);
        console.log("Here the value of item is =="+JSON.stringify(body));
        try {
            const items: Array<Item> = [item];
            console.log("This is what I am going to insert  - - "+ JSON.stringify(items));
            await this.db.createItem(items);
        } catch (error) {
            console.error("An Error has occured while adding item --"+JSON.stringify(error));
        }
        return "Item has been inserted";
    }
}