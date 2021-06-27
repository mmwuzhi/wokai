const router = require('express').Router()

// 用于识别是谁发送了推送消息
const webPush = require('web-push')
const publicVapidKey = process.env.PUBLIC_VAPID_KEY
const privateVapidKey = process.env.PRIVATE_VAPID_KEY
webPush.setVapidDetails(
  'mailto:mmwuzhi@gmail.com',
  publicVapidKey,
  privateVapidKey
)

router.route('/').post((req, res) => {
  const subscription = req.body.subscription
  const data = JSON.stringify({
    title: req.body.title,
    detail: req.body.detail,
  })
  setTimeout(() => {
    webPush
      .sendNotification(subscription, data)
      .catch((error) => {
        console.error(error.stack)
      })
  }, req.body.timer)
  res.sendStatus(201)
})

module.exports = router
