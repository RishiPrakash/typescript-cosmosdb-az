const koa = require("koa")
import koaRouter from "koa-router";
const app = new koa();
const koaBodyParser = require("koa-bodyparser");
import DB from "../repository/db.js";
import dbConfig from "../repository/dbconfig.js";
import ProductHandler from "./Handler";

export default class ProductService{
    private handler: ProductHandler | undefined;
    private serviceRouter: koaRouter;
    constructor(){
        this.serviceRouter = new koaRouter();
    }
    async initialize(){
        console.log("Initializing the service...");
        console.log("starting the DB...");
        const config = new dbConfig("dubwiki", "Category", ["/categoryName"]);
        const datastore = new DB(config);
        try {
            await datastore.createDB();
            console.log("DB is connected...");
            this.handler = new ProductHandler(datastore);
            this.serviceRouter.get("/",(ctx)=>{
                ctx.body = "Welcome! This is default route."
            });
            this.serviceRouter.post("/add/product",async (ctx)=>{
                const result = await this.handler?.handleCreateRequest(ctx.request.body);
                ctx.body = result;
            });
            
            
        } catch (error) {
            console.log("An Error occured while starting the service" + error);
        }
        console.log("Service has been initialized!");
    }
    async startServer() {
        app.use(koaBodyParser({
            enableTypes:['json']
        }))
        app.use(this.serviceRouter.routes());
        app.listen(3000, () => {
            console.log("sever is started...")
        })
    };
}

