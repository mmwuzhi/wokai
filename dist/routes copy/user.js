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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_model_1 = require("../models/user.model");
const router = express_1.default.Router();
router.route('/').post((0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const userExists = yield user_model_1.User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('メールアドレスは既に登録しました');
    }
    const user = yield user_model_1.User.create({
        username,
        email,
        password,
    });
    if (user) {
        req.session.userInfo = user;
        res.status(201).json({
            id: user.id,
            name: user.username,
            email: user.email,
        });
    }
    else {
        res.status(400);
        throw new Error('無効なユーザーデータ!');
    }
})));
router.route('/update').post((0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email });
    console.log('user');
    console.log(user);
    const data = {
        password: req.body.newPassword,
        username: username,
        email: email,
    };
    req.session.userInfo = data;
    if (user && (yield user.matchPW(password))) {
        user_model_1.User.findOneAndUpdate({ email }, { $set: data }, {}, (err, data) => {
            if (err) {
                console.log('error: ' + err);
            }
            else if (!data) {
                console.log('データが見つかりません');
                console.log(data);
            }
            else if (data) {
                console.log('アップデートしました！');
                console.log(data);
            }
        });
        res.status(201).json(data);
    }
    else {
        res.status(400);
        throw new Error('パスワードが間違いました！');
    }
})));
router.route('/userInfo').get((req, res) => {
    req.session.userInfo
        ? res.status(200).json({
            message: '',
            data: req.session.userInfo,
            code: 0,
        })
        : res.status(200).json({
            message: 'もう一度サインインしてください',
            data: req.session.userInfo,
            code: 1,
        });
});
router.route('/login').post((0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.User.findOne({ email });
    const data = {
        id: user === null || user === void 0 ? void 0 : user._id,
        username: user === null || user === void 0 ? void 0 : user.username,
        email: user === null || user === void 0 ? void 0 : user.email,
    };
    req.session.userInfo = data;
    if (user && (yield user.matchPW(password))) {
        res.status(201).json(data);
    }
    else {
        res.status(400);
        throw new Error('メールアドレスまたはパスワードが間違いました!');
    }
})));
router.route('/logout').get((req, res) => {
    req.session.destroy((err) => {
        console.log(err);
    });
    res.status(200).json({ logout: '1' });
});
exports.default = router;
