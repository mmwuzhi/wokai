"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const chat_model_1 = require("../models/chat.model");
const app = (0, express_1.default)();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT_IO || 5002;
const uri = process.env.ATLAS_URI ?? 'mongodb://localhost:27017/wokai';
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
    socket.on('sendMsg', async (data) => {
        const { name, msg } = data;
        const chat = await chat_model_1.Chat.create({
            name,
            msg,
        });
        if (chat) {
            const chats = await chat_model_1.Chat.find().sort({ createdAt: -1 }).limit(20);
            io.emit('recvMsg', chats);
        }
    });
    socket.on('disconnect', () => {
        count--;
        io.emit('sysMsg', count);
        console.log(`disconnect, online: ${count}`);
    });
});
http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
