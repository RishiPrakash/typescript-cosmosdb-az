"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa = require("koa");
const koa_router_1 = __importDefault(require("koa-router"));
const app = new koa();
const { koaBody } = require('koa-body');
const db_js_1 = __importDefault(require("../repository/db.js"));
const dbconfig_js_1 = __importDefault(require("../repository/dbconfig.js"));
const Handler_1 = __importDefault(require("./Handler"));
class ProductService {
    constructor() {
        this.serviceRouter = new koa_router_1.default();
    }
    async initialize() {
        console.log("Initializing the service...");
        console.log("starting the DB...");
        const config = new dbconfig_js_1.default("dubwiki", "Category", ["/categoryName"]);
        const datastore = new db_js_1.default(config);
        try {
            await datastore.createDB();
            console.log("DB is connected...");
            this.handler = new Handler_1.default(datastore);
            this.serviceRouter.get("/", (ctx) => {
                ctx.body = "Welcome! This is default route.";
            });
            this.serviceRouter.post("/product", ctx => {
                console.log("here it is---" + ctx.request.body);
            });
            //this.handler?.handleCreateRequest(ctx);
        }
        catch (error) {
            console.log("An Error occured while starting the service" + error);
        }
        console.log("Service has been initialized!");
    }
    async startServer() {
        app.use(koaBody());
        app.use(this.serviceRouter.routes());
        app.use((ctx) => {
            // the parsed body will store in ctx.request.body
            // if nothing was parsed, body will be an empty object {}
            ctx.body = ctx.request.body;
        });
        app.listen(3000, () => {
            console.log("sever is started...");
        });
    }
    ;
}
exports.default = ProductService;
