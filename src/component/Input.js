import React from 'react';
import Checkbox from './input/Checkbox';
import Radio from './input/Radio';

const Input = (props) => {
  console.log('props in Input >>>>> ', props)
  return (
    <div>
      <label>{props.label}</label>
      {props.input && props.input === 'checkbox' ? <Checkbox {...props}/> : props.input && props.input === 'radio' ? <Radio {...props}/> : props.input ? (
        <input type={props.input}/>
      ): null}
    </div>
  );
};

export default Input;