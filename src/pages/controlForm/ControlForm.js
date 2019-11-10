import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_form_field } from '../../actions/forms';
import Select from 'react-select';
import * as Styled from './styles';
import {
  FIELD_TYPE,
  INPUT_TYPE
} from '../constants';

class ControlForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
      input: '',
      radioField: '',
      max: null,
      min: null,
      subInput: [],
      label: '',
    }
    this.addValue = ['radio', 'checkbox', 'select'];
  }

  handleSelect = (type, e) => {
    this.setState({[type]: e.value}, () => {
      if((this.state.field === 'input' && this.addValue.includes(this.state.input)) || this.state.field === 'select') {
        if(this.state.subInput.length === 0) {
          const field = {
            name: '',
            value: '',
          };
          this.setState({
            subInput: [field]
          })
        }
      }
    });
  }

  handleAddField = () => {
    let payload = {};
    for(let item in this.state) {
      if((!Array.isArray(this.state[item]) && this.state[item]) || (Array.isArray(this.state[item]) && this.state[item].length > 0)) {
        payload[item] = this.state[item];
      }
    }
    payload.value = '';
    payload.error = '';
    this.props.addField(payload);
    console.log(payload)
  }

  subInputChange = (index, e) =>{
    let subInput = [...this.state.subInput];
    let targetItem = subInput[index];
    targetItem[e.target.name] = e.target.value;
    this.setState({subInput})
  }

  addSubField = () => {
    const field = {
      name: '',
      value: '',
    }
    let subInput = [...this.state.subInput, field];
    this.setState({ subInput });
  }

  render() {
    return (
      <div>
        <div>Please put label</div>
        <input 
          type='text' 
          value={this.state.label} 
          onChange={(e) => this.setState({label: e.target.value})} />
        <Select 
          options={FIELD_TYPE}
          onChange={(e) => this.handleSelect('field', e)}
        />
        {this.state.field === 'input' ? (
          <Select 
            options={INPUT_TYPE}
            onChange={(e) => this.handleSelect('input', e)}
          />) 
        : null}
        {
          (this.state.field === 'input' && this.state.input === 'range' ? (
            <div>
              <div>
                <lable>Min</lable>
                <input type={'number'} onChange={(e) => this.setState({min: e.target.value})}/>
              </div>
              <div>
                <lable>Max</lable>
                <input type={'number'} onChange={(e) => this.setState({max: e.target.value})}/>
              </div>
            </div>
          ): null)
        } 
        {
          ((this.state.field === 'input' && this.addValue.includes(this.state.input)) || this.state.field === 'select') ? (
            <>
            {this.state.input === 'radio' ? (
              <div>
                <span>Please put name of field</span>
                <input type={'text'} onChange={(e) => this.setState({radioField: e.target.value})}/>
              </div>
            ): null}
            <Styled.SubInputWrapper>
              {this.state.subInput.map((sub, i) => (
                <Styled.SubInput key={i}>
                  <Styled.SubInputContainer>
                    <Styled.SubInputLabel>Name</Styled.SubInputLabel>
                    <Styled.SubInputInput 
                      type={'text'} 
                      name={'name'} 
                      onChange={(e) => this.subInputChange(i, e)}/>
                  </Styled.SubInputContainer>
                  <Styled.SubInputContainer>
                    <Styled.SubInputLabel>Value</Styled.SubInputLabel>
                    <Styled.SubInputInput  
                      type={'text'} 
                      name={'value'}
                      onChange={(e) => this.subInputChange(i, e)}/>
                  </Styled.SubInputContainer>
                </Styled.SubInput>
              ))}
              <button onClick={this.addSubField}>Add Field</button>
            </Styled.SubInputWrapper>
            </>
          ) : null
        }
        <button onClick={this.handleAddField}>Render</button>
      </div>
    );
  }
  
};

const mapDispatchToProps = (dispatch) => {
  return {
    addField: (payload) => dispatch(create_form_field(payload)),
  }
}


export default connect(null, mapDispatchToProps)(ControlForm);