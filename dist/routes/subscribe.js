"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const web_push_1 = __importDefault(require("web-push"));
const router = express.Router();
const publicVapidKey = (_a = process.env.PUBLIC_VAPID_KEY) !== null && _a !== void 0 ? _a : 'BOVjyLKO6qyyTL_EkSuANUdMFfjCIdn26dDqXLBE69RKabZ5mQF6pU-GC9YJo01o5N9EOSs6nA_K8B1DqXqeIe8';
const privateVapidKey = (_b = process.env.PRIVATE_VAPID_KEY) !== null && _b !== void 0 ? _b : '77RcuZCSgnkNpTn-BB9mTiD_O4Gj_YTyoo2ko7Gpyds';
web_push_1.default.setVapidDetails('mailto:mmwuzhi@gmail.com', publicVapidKey, privateVapidKey);
router.route('/').post((req, res) => {
    const subscription = req.body.subscription;
    const data = JSON.stringify({
        title: req.body.title,
        detail: req.body.detail,
    });
    setTimeout(() => {
        web_push_1.default
            .sendNotification(subscription, data)
            .catch((error) => {
            console.error(error.stack);
        });
    }, req.body.timer);
    res.sendStatus(201);
});
exports.default = router;
