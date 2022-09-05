import {Dispatch} from "redux";

import { actionTypes } from "./actionTypes";

import { loginUserRequest, getUserDetailsRequest } from "../../api/auth";
import { configureAxiosHeaders } from "../../api/axiosConfig";

export const loginUser = (payload:any) => async (dispatch: Dispatch<AuthDispatchTypes>) => {

    const {code, navigate} = payload;
    dispatch({ type: actionTypes.LOGIN_USER_REQUEST })
    try {
      const {data} = await loginUserRequest(code);
      if (data?.access_token) {
        localStorage.setItem("token", data?.access_token)
        configureAxiosHeaders(data?.access_token)
        const userData = await getUserDetailsRequest()
        console.log(userData.data.name, "userData")
        navigate("/");
        dispatch({ type: actionTypes.LOGIN_USER_SUCCESS, payload:userData.data.name  })
      }
    } catch (e) {
      dispatch({ type: actionTypes.LOGIN_USER_ERROR })
    }
  }


  export const logOutUser = () => async (dispatch: Dispatch<AuthDispatchTypes>) => {

    dispatch({ type: actionTypes.LOGOUT_USER_REQUEST })
    try {
        localStorage.clear()
        dispatch({ type: actionTypes.LOGOUT_USER_SUCCESS })
    } catch (e) {
      console.log(e)
    }
  }

