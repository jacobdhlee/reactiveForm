import React, { Component } from 'react';
import { connect } from 'react-redux';


class ReadForm extends Component {
  render() {
    return (
      <div>
        Read Update form here
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