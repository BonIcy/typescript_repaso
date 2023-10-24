"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
const bases = process.env.DDBB256;
const nombreBase = 'hamburgueseria';
router.get('/endpoint1', async (req, res) => {
    try {
        if (!bases) {
            return res.status(500).json({ error: 'Variable de entorno no configurada' });
        }
        const client = new mongodb_1.MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('ingredientes');
        const result = await collection.find({ stock: { $lt: 400 } }).toArray();
        res.json(result);
        client.close();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
});
router.get('/endpoint2', async (req, res) => {
    try {
        if (!bases) {
            res.status(500).json({ error: 'Variable de entorno no configurada' });
            return;
        }
        const client = new mongodb_1.MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('hamburguesas');
        const result = await collection.find({ categoria: 'Vegetariana' }).toArray();
        res.json(result);
        client.close();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
});
router.get('/endpoint3', async (req, res) => {
    try {
        if (!bases) {
            res.status(500).json({ error: 'Variable de entorno no configurada' });
            return;
        }
        const client = new mongodb_1.MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('chefs');
        const result = await collection.find({ especialidad: 'Carnes' }).toArray();
        res.json(result);
        client.close();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
});
router.get('/endpoint4', async (req, res) => {
    try {
        if (!bases) {
            res.status(500).json({ error: 'Variable de entorno no configurada' });
            return;
        }
        const client = new mongodb_1.MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('ingredientes');
        const result = await collection.updateMany({}, { $mul: { precio: 1.5 } });
        res.json(result);
        client.close();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
});
router.get('/endpoint5', async (req, res) => {
    try {
        if (!bases) {
            res.status(500).json({ error: 'Variable de entorno no configurada' });
            return;
        }
        const client = new mongodb_1.MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('hamburguesas');
        const result = await collection.find({ chef: 'ChefB' }).toArray();
        res.json(result);
        client.close();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
});
exports.default = router;
