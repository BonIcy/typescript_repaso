"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./routes/routes");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use('/hamburguesas', routes_1.default);
var port = process.env.PORT256;
app.use(express_1.default.json());
app.listen(port, function () {
    console.log("Server corriendo en ".concat(port));
});
