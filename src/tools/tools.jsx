export const isMobile = () => {
  const userAgentInfo = navigator.userAgent
  const mobileAgents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ]
  let mobileFlag = false

  //根据userAgent判断是否是手机
  for (let mobileAgent of mobileAgents) {
    if (userAgentInfo.indexOf(mobileAgent) > 0) {
      mobileFlag = true
      break
    }
  }

  return mobileFlag
}
