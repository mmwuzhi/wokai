import moment from 'moment'
export const isMobile = (): boolean => {
  const userAgentInfo: string = navigator.userAgent
  const mobileAgents: string[] = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod',
  ]
  let mobileFlag: boolean = false

  //根据userAgent判断是否是手机
  for (let mobileAgent of mobileAgents) {
    if (userAgentInfo.indexOf(mobileAgent) > 0) {
      mobileFlag = true
      break
    }
  }
  return mobileFlag
}

/**
 * 获得指定日期所在月份的6*7日历数组
 * @param {moment.MomentInput} date 指定日期
 * @returns 指定日期所在月份的日历数组
 */
export const monthDay = (date: moment.MomentInput): number[][] => {
  const daysArr: number[][] = [[], [], [], [], [], []] // 6*7的日历数组
  const currentWeekday: number = moment(date).date(1).weekday() // 获取当月1日为星期几
  const lastMonthDays: number = moment(date).subtract(1, 'month').daysInMonth() // 获取上月天数
  const currentMonthDays: number = moment(date).daysInMonth() // 获取当月天数
  const getDay = (day: number): number =>
    day <= lastMonthDays
      ? day
      : day <= lastMonthDays + currentMonthDays
      ? day - lastMonthDays
      : day - (lastMonthDays + currentMonthDays) // 日期处理
  for (let i = 0; i < 7; i += 1) {
    let virtualDay: number = lastMonthDays - currentWeekday + i + 1
    for (let j = 0; j < 6; j += 1) {
      daysArr[j][i] = getDay(virtualDay + j * 7)
    }
  }
  return daysArr
}
