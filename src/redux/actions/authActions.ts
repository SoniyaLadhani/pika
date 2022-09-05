import { actionTypes } from "./actionTypes";
import {Dispatch} from "redux";

import { loginUserRequest } from "../../api/auth";
import { configureAxiosHeaders } from "../../api/axiosConfig";

export const loginUser = (payload: string) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    console.log(payload, "payload")
    dispatch({ type: actionTypes.LOGIN_USER_REQUEST })
    try {
      const {data} = await loginUserRequest(payload);
      if (data?.access_token) {
        localStorage.setItem("token", data?.access_token)
        configureAxiosHeaders(data?.access_token)
        dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload: data?.access_token })
      }
    } catch (e) {
      dispatch({ type: actionTypes.LOGIN_USER_ERROR })
    }
  }

