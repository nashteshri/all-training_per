"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./config/data-source");
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.port || 3000;
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => console.log("connected Sucessfully"))
    .catch((error) => console.log("error occured", error));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
