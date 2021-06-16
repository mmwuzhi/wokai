import React from 'react'
import moment from 'moment'

import Clock from './Clock'
import { monthDay } from '../tools/tools'

const month = (
  <table class='border-gray-100 border-2 text-center'>
    <tbody>
      <tr>
        {['日', '月', '火', '水', '木', '金', '土'].map(
          (weekday, indexWeekday) => (
            <td class='border-gray-100 border-2 p-1' key={indexWeekday}>
              {weekday}
            </td>
          )
        )}
      </tr>
      {monthDay(moment()).map((week, indexWeek) => (
        <tr key={indexWeek}>
          {week.map((day, indexDay) => (
            <td
              class={`${
                moment().format('DD') === String(day) ? 'bg-green-200' : ''
              } border-gray-100 border-2 p-1`}
              key={indexDay}
            >
              {day}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

const Home = () => {
  return (
    <>
      {month}
      <Clock />
    </>
  )
}

export default Home
