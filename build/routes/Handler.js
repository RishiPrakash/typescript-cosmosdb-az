"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductHandler {
    constructor(db) {
        this.db = db;
    }
    async handleCreateRequest(ctx) {
        const item = (ctx.body);
        console.log("Here the value of item is ==" + ctx.body);
        try {
            const items = [item];
            console.log("This is what I am going to log - - " + items);
            await this.db.createItem(items);
        }
        catch (error) {
            console.error("An Error has occured while adding item --" + error);
        }
        ctx.body = "Item has been inserted";
    }
}
exports.default = ProductHandler;
