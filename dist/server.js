"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const user_1 = __importDefault(require("./routes/user"));
const comment_1 = __importDefault(require("./routes/comment"));
const subscribe_1 = __importDefault(require("./routes/subscribe"));
require('dotenv').config();
const app = (0, express_1.default)();
app.disable('x-powered-by');
const port = process.env.PORT_SERVER || 5001;
const uri = process.env.ATLAS_URI ?? 'mongodb://localhost:27017/wokai';
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)('express_react_cookie'));
app.use((0, express_session_1.default)({
    secret: 'express_react_cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 1000 * 60 * 12 },
    store: connect_mongo_1.default.create({
        mongoUrl: uri,
        touchAfter: 24 * 60 * 60,
    }),
}));
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});
app.use('/comments', comment_1.default);
app.use('/users', user_1.default);
app.use('/subscribe', subscribe_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
