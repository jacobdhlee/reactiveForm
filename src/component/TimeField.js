import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

const TimeField = (props) => {
  const [time, setTime] = useState('10:00')
  return (
    <div>
      <div>{props.label}</div>
      <TimePicker value={time} onChange={time => setTime(time)}/>
    </div>
  )
}

export default TimeField;