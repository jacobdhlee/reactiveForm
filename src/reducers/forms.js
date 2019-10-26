import { ADD_FORM_FIELD } from '../actions/types';

const INITAL_STATE = {
  forms: [],
}

const reducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
    case ADD_FORM_FIELD:
      let forms = [...state.forms];
      forms.push(action.payload);
      console.log(state, ' : ', action.payload)
      return {
        ...state,
        forms,
      }
      default:
        return {
          ...state,
        }
  }
}

export default reducer