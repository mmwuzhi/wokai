const router = require('express').Router()
let Comment = require('../models/comment.model')

router.route('/').get((req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const {username, content, email, createdTime} = req.body
  const newComment = new Comment({
    username,
    content,
    email,
    createdTime,
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
      comment.createdTime = Date.parse(req.body.createdTime)

      comment
        .save()
        .then(() => res.json('Comment updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
