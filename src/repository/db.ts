import Item  from "../model/item";
const dotevn = require("dotenv")
const { CosmosClient } = require("@azure/cosmos");
import dbConfig from "./dbconfig";

export default class DBInitializer {
    private dbConfig: dbConfig;
    private database: any;
    private container: any;
    constructor(config: dbConfig) {
        this.dbConfig = config;
    }


    async dbSetup(): Promise<void> {
        dotevn.config();
        const key = process.env.COSMOS_KEY;

        const endpoint = process.env.COSMOS_ENDPOINT;

        const cosmosClient = new CosmosClient({ endpoint, key });

        const { database } = await cosmosClient.databases.createIfNotExists({ id: this.dbConfig.databaseName });
        this.database = database;
        console.log(`${this.database.id} database ready`);

        const { container }= await this.database.containers.createIfNotExists({
            id: this.dbConfig.containerName,
            partitionKey: {
                paths: this.dbConfig.partitionKeyPath
            }
        });
        this.container = container;
        console.log(`${this.container.id} container ready`);
    }

    async createItem(items: Item[]): Promise<any> {
        for (const item of items) {
            const { resource } = await this.container.items.create(item);
            console.log(`'${resource.name}' inserted`);
        }
        return items;
    }
    async readItem(items: any) {
        const { resource } = await this.container.item(items[0].id, items[0].categoryName).read();
        console.log(`${resource.name} read`);
    }
    async createDB() {
        await this.dbSetup();
    }
}





