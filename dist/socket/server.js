"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const chat_model_1 = require("../models/chat.model");
const app = (0, express_1.default)();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT_IO || 5002;
const uri = (_a = process.env.ATLAS_URI) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017/wokai';
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
app.get('/', (req, res) => {
    res.status(201);
});
let count = 0;
io.on('connection', (socket) => {
    count++;
    io.emit('sysMsg', count);
    console.log(`connection,online: ${count}`);
    socket.on('reqMsg', () => {
        socket.emit('sysMsg', count);
        chat_model_1.Chat.find()
            .sort({ createdAt: -1 })
            .limit(20)
            .then((chats) => {
            socket.emit('recvMsg', chats);
        });
    });
    socket.on('sendMsg', (data) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, msg } = data;
        const chat = yield chat_model_1.Chat.create({
            name,
            msg,
        });
        if (chat) {
            const chats = yield chat_model_1.Chat.find().sort({ createdAt: -1 }).limit(20);
            io.emit('recvMsg', chats);
        }
    }));
    socket.on('disconnect', () => {
        count--;
        io.emit('sysMsg', count);
        console.log(`disconnect, online: ${count}`);
    });
});
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
