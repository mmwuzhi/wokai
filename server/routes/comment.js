const router = require('express').Router()
let Comment = require('../models/comment.model')

router.route('/').get((req, res) => {
  Comment.find({
    $or: [{ email: undefined }, { email: req.session.userInfo?.email }],
  })
    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
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

  const newComment = new Comment({
    username,
    content,
    email,
  })
  newComment
    .save()
    .then(() => res.json('Comment added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//获取
router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//删除
router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err))
})
//更新
router.route('/update/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then((comment) => {
      comment.name = req.body.username
      comment.content = req.body.content

      comment
        .save()
        .then(() => res.json('Comment updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
