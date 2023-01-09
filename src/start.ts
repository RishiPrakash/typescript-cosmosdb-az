import index from "./routes/ProductService";
(async ()=>{
    const service = new index();
    await service.initialize();
    service.startServer();
})();
