import * as constant from './types';

export const create_form_field = (payload) => dispatch => {
  dispatch({
    type: constant.ADD_FORM_FIELD,
    payload: payload,
  })
}

