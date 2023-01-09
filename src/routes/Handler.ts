import Item from "../model/item";
import DBInitializer from "../repository/db";
export default class ProductHandler {
    private db:DBInitializer;
    constructor(db:DBInitializer){
        this.db = db;
    }
    public async handleCreateRequest(ctx: any) {
        const item = <Item>(ctx.body);
        console.log("Here the value of item is =="+ctx.body);
        try {
            const items: Array<Item> = [item];
            console.log("This is what I am going to log - - "+items)
            await this.db.createItem(items);
        } catch (error) {
            console.error("An Error has occured while adding item --"+error);
        }
        ctx.body = "Item has been inserted";
    }
}