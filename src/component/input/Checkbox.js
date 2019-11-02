import React from 'react';

const Checkbox = (props) => {
  return(
    <div>
      <div>{props.label}</div>
      {props.subInput.map((item, i) => {
        let value = item.value === 'true' ? true : false
        return (
          <div key={i}>
            <div>{item.name}</div>
            <input type={'checkbox'} name={item.name} checked={value}/>
          </div>
        )
      })}
    </div>
  )
};

export default Checkbox;