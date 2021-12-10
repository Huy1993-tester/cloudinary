import { SIGN_IN } from "./constant";

const initialState = {
  signIn: {},
};

export const SignReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      state.signIn = { ...payload };
      return { ...state };
    default:
      return state;
  }
};
