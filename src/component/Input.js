import React from 'react';
import Checkbox from './input/Checkbox';
import Radio from './input/Radio';

const Input = (props) => {  
  return (
    <div>
      <label>{props.label}</label>
      {props.input && props.input === 'checkbox' ? <Checkbox {...props}/> : props.input && props.input === 'radio' ? <Radio {...props} onChange={props.onChange}/> : props.input && props.input === 'range'? (
        <input type={props.input} min={props.min} max={props.max}/>
      ): props.input ? <input type={props.input} onChange={props.onChange}/> : null}
    </div>
  );
};

export default Input;