"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class dbConfig {
    constructor(dbName, cntrName, prtKeyPath) {
        this.databaseName = dbName;
        this.containerName = cntrName;
        this.partitionKeyPath = prtKeyPath;
    }
}
exports.default = dbConfig;
