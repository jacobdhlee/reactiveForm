import React, { Component } from 'react';
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

  subInputChange = (index, e) =>{

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
          ((this.state.field === 'input' && this.addValue.includes(this.state.input)) || this.state.field === 'select') ? (
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
          ) : null
        }
        <button>Render</button>
      </div>
    );
  }
  
};

export default ControlForm;