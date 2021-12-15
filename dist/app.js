"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
const add = (a, b) => a + b;
app.get('/', (req, res, next) => {
    console.log(add(100, 200));
    res.send('Hello World!');
});
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
