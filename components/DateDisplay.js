import { useState } from 'react'
import moment from 'moment'

const DateDisplay = () => {
  const [time, setTime] = useState(moment().format('LT'))
  const [date, setDate] = useState(moment().format('LL'))

  // Check for time/date, every second
  setInterval(() => {
    setTime(moment().format('LT'))
    setDate(moment().format('LL'))
  }, 1000)

  return (
    <p>
      Today is {date}. The time is {time}
    </p>
  )
}

export default DateDisplay
