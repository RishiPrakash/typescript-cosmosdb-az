# typescript-cosmosdb-az

### Description
Purpose of the project is to demonstrate creation of Get and Post REST API endpoints which are retriving and adding data to a cosmos DB container.
Followings are the main packages used in creating this project
1. koa
2. koa-router
3. koa-bodyParser
3. @azure/cosmos

To run the project on local you will be required to
1. create a .env file in root folder and give it your COSMOS credentials
```
COSMOS_ENDPOINT=
COSMOS_KEY=xx
```
2. after this run command `npm install`
3. after this run command `npm run start:dev`
