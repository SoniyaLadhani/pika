import { actionTypes } from "../actions/actionTypes";

const initialState:AuthState = {
  signedIn: false,
  userName: "Soniya Ladhani",
};

export const authReducer = (state: AuthState = initialState, action: any): AuthState => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        signedIn: true,
        userName: action.payload,
      };

    default:
      return state;
  }
};

