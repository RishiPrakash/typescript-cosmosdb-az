"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("./routes/ProductService"));
(async () => {
    const service = new ProductService_1.default();
    await service.initialize();
    service.startServer();
})();
