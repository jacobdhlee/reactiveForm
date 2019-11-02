import React from 'react';
import Select from 'react-select';

const SelectField = (props) => {
  const option = props.subInput.map(item => {
    return {label: item.name, value: item.value}
  })
  return (
    <div>
      Select Field
      <div>{props.label}</div>
      <Select options={option} placeholder={'please select'}/>
    </div>
  )
}

export default SelectField;