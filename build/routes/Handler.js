"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductHandler {
    constructor(db) {
        this.db = db;
    }
    async handleCreateRequest(body) {
        const item = (body);
        console.log("Here the value of item is ==" + JSON.stringify(body));
        try {
            const items = [item];
            console.log("This is what I am going to insert  - - " + JSON.stringify(items));
            await this.db.createItem(items);
        }
        catch (error) {
            console.error("An Error has occured while adding item --" + JSON.stringify(error));
        }
        return "Item has been inserted";
    }
}
exports.default = ProductHandler;
