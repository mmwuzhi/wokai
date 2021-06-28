import axios from 'axios'

const publicVapidKey =
  'BOVjyLKO6qyyTL_EkSuANUdMFfjCIdn26dDqXLBE69RKabZ5mQF6pU-GC9YJo01o5N9EOSs6nA_K8B1DqXqeIe8'

/**
 * 将base64字符串转换为Uint8Array
 * @param {string} base64String base64字符串
 * @returns Uint8Array
 */
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

/**
 * 发送订阅信息
 * @param {string} title 标题
 * @param {string} detail 内容
 * @param {number} timer 倒计时时间
 */
const run = async (title, detail, timer) => {
  const registration = await navigator.serviceWorker.register(
    '/serviceWorker.js',
    {
      scope: '/',
    }
  )

  await navigator.serviceWorker.ready // <---------- WAIT
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  })

  const postBody = {
    subscription,
    title,
    detail,
    timer,
  }

  await axios.post('/api/subscribe/', postBody)
}

/**
 * 发送订阅信息
 * @param {string} title 标题
 * @param {string} detail 内容
 * @param {number} timer 倒计时时间
 */
const subscribe = (title, detail, timer) => {
  if ('serviceWorker' in navigator) {
    run(title, detail, timer).catch((error) => console.error(error))
  }
}

export default subscribe
