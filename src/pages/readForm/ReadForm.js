import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RENDER_ITEMS } from './constant'

class ReadForm extends Component {
  handleChange = (e) => {
    console.log('target ', e.target, ' ', e.target.value);
  }

  render() {
    console.log('this.props at read form ', this.props.forms.forms)
    const { forms } = this.props.forms
    console.log('form >>> ', forms)
    return (
      <div>
        <div>Read Update form here</div>
        {(!forms || forms.length === 0) ? null : forms.map((form, i) => {
          const FieldItem = RENDER_ITEMS[form.field];
          return (
            <div key={i}>
              <FieldItem {...form} onChange={(e) => this.handleChange(e)}/>
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