export default class dbConfig{
    public databaseName: string;
    public containerName: string;
    public partitionKeyPath: string[];

    constructor(dbName: string, cntrName: string, prtKeyPath: string[]){
        this.databaseName = dbName;
        this.containerName = cntrName;
        this.partitionKeyPath = prtKeyPath;
    }
}