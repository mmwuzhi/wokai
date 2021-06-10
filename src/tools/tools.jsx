import moment from 'moment'
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

export const monthDay = (date) => {
  const daysArr = [[], [], [], [], [], []] // 6*7的日历数组
  const currentWeekday = moment(date).date(1).weekday() // 获取当月1日为星期几
  const lastMonthDays = moment(date).subtract(1, 'month').daysInMonth() // 获取上月天数
  const currentMonthDays = moment(date).daysInMonth() // 获取当月天数
  const getDay = (day) =>
    day <= lastMonthDays
      ? day
      : day <= lastMonthDays + currentMonthDays
      ? day - lastMonthDays
      : day - (lastMonthDays + currentMonthDays) // 日期处理
  for (let i = 0; i < 7; i += 1) {
    let virtualDay = lastMonthDays - currentWeekday + i + 1
    for (let j = 0; j < 6; j += 1) {
      daysArr[j][i] = getDay(virtualDay + j * 7)
    }
  }
  return daysArr
}
