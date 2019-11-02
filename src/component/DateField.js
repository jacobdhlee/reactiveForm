import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const DateField = (props) => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
      <div>{props.label}</div>
      <DatePicker onChange={(date) => setDate(date)} value={date}/>
    </div>
  )
}

export default DateField;