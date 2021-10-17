import express from 'express'
import asyncHandler from 'express-async-handler'

import { Comment, CommentDocument } from '../models/comment.model'

const router = express.Router()

router.route('/').get((req: express.Request, res) => {
  Comment.find({
    $or: [{ email: undefined }, { email: req.session.userInfo?.email }],
  })
    .sort({ createdAt: -1 })
    .then((comments: any) => res.json(comments))
    .catch((err: string) => res.status(400).json('Error: ' + err))
})

router.route('/add').post(
  asyncHandler(async (req: express.Request, res: express.Response) => {
    let { username, content, email } = req.body
    // xss对应和link对应
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g
    content = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
      .replace(reg, "<a href='$1$2' title='$1$2' target='_blank'>リンク</a>")

    const comment = Comment.create({
      username,
      content,
      email,
    } as CommentDocument)

    comment
      .then(() => res.json('Comment added!'))
      .catch((err: string) => res.status(400).json('Error: ' + err))
  })
)

//获取
router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then((comment: any) => res.json(comment))
    .catch((err: string) => res.status(400).json('Error: ' + err))
})

//删除
router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).json('Comment deleted.'))
    .catch((err: string) => res.status(400).json('Error: ' + err))
})

//更新
router.route('/update/:id').put((req, res) => {
  Comment.findById(req.params.id)
    .then((comment: any) => {
      comment.name = req.body.username
      comment.content = req.body.content

      comment
        .save()
        .then(() => res.status(201).json('Comment updated!'))
        .catch((err: string) => res.status(400).json('Error: ' + err))
    })
    .catch((err: string) => res.status(400).json('Error: ' + err))
})

export default router
