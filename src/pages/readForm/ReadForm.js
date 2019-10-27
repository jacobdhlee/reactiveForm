import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RENDER_ITEMS } from './constant'

class ReadForm extends Component {
  render() {
    console.log('this.props at read form ', this.props.forms.forms)
    const { forms } = this.props.forms
    return (
      <div>
        <div>Read Update form here</div>
        {(!forms || forms.length === 0) ? null : forms.map((form, i) => {
          const FieldItem = RENDER_ITEMS[form.field];
          return (
            <div key={i}>
              <FieldItem {...form}/>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forms: state.form
  };
}

export default connect(
  mapStateToProps,
)(ReadForm);