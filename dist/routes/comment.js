"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const comment_model_1 = require("../models/comment.model");
const router = express_1.default.Router();
router.route('/').get((req, res) => {
    comment_model_1.Comment.find({
        $or: [
            { email: undefined },
            { email: '' },
            { email: req.session.userInfo?.email },
        ],
    })
        .sort({ createdAt: -1 })
        .then((comments) => res.json(comments))
        .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/add').post((0, express_async_handler_1.default)(async (req, res) => {
    let { username, content, email } = req.body;
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
    content = content
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
        .replace(reg, "<a href='$1$2' title='$1$2' target='_blank'>リンク</a>");
    const comment = comment_model_1.Comment.create({
        username,
        content,
        email,
    });
    comment
        .then(() => res.json('Comment added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
}));
router.route('/:id').get((req, res) => {
    comment_model_1.Comment.findById(req.params.id)
        .then((comment) => res.json(comment))
        .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    comment_model_1.Comment.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json('Comment deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').put((req, res) => {
    comment_model_1.Comment.findById(req.params.id)
        .then((comment) => {
        comment.name = req.body.username;
        comment.content = req.body.content;
        comment
            .save()
            .then(() => res.status(201).json('Comment updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
        .catch((err) => res.status(400).json('Error: ' + err));
});
exports.default = router;
