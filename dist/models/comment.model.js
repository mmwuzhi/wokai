"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String },
    content: { type: String, required: true },
}, { timestamps: true });
exports.Comment = (0, mongoose_1.model)('Comment', commentSchema);
