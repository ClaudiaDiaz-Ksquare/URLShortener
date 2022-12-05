"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// import { TodoRouter } from './routes/Todo.routes'
const URL_routes_1 = require("./routes/URL.routes");
app.use(express_1.default.json());
// app.use('/todos', TodoRouter);
app.get('/', (req, res) => {
    res.send('VIVEEEEEEEEEEE');
});
// GET redirects short URL to its original URL.
// app.use('/:shorturl', redirectShortUrl)
// Middleware para hacer el [POST] request
app.use('/url', URL_routes_1.URLRouter);
exports.default = app;
