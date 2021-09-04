import * as express from 'express'
import webPush from 'web-push'
const router = express.Router()
// 用于识别是谁发送了推送消息
const publicVapidKey = process.env.PUBLIC_VAPID_KEY ?? ''
const privateVapidKey = process.env.PRIVATE_VAPID_KEY ?? ''
webPush.setVapidDetails(
  'mailto:mmwuzhi@gmail.com',
  publicVapidKey,
  privateVapidKey
)

router.route('/').post((req: express.Request, res: express.Response) => {
  const subscription = req.body.subscription
  const data = JSON.stringify({
    title: req.body.title,
    detail: req.body.detail,
  })
  setTimeout(() => {
    webPush
      .sendNotification(subscription, data)
      .catch((error: { stack: any }) => {
        console.error(error.stack)
      })
  }, req.body.timer)
  res.sendStatus(201)
})

export default router
