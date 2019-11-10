import React from 'react';
import PropTypes from 'prop-types';

const Radio = props => {
  return (
    <div onChange={props.onChange}>
      {props.subInput && props.subInput.length > 0 ? (
        props.subInput.map((sub, i) => {
          return (
            <div key={i}>
              <div>{sub.name}</div>
              <input type={'radio'} name={props.radioField} value={sub.value}/>
            </div>
          )
        })
      ): null}
    </div>
  );
};

export default Radio;