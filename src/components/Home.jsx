import React from 'react'
import moment from 'moment'

import Clock from './Clock'
import { monthDay } from '../tools/tools'

const month = (
  <table>
    <tbody>
      {monthDay(moment()).map((week, indexWeek) => (
        <tr key={indexWeek}>
          {week.map((day, indexDay) => (
            <td key={indexDay}>{day}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)

const Home = () => {
  return (
    <>
      {/* {month} */}
      <Clock />
    </>
  )
}

export default Home
