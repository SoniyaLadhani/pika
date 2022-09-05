import {Dispatch} from "redux";

import { actionTypes } from "./actionTypes";
import { getPhotosRequest } from "../../api/photos";


export const getPhotos = () => async (dispatch: Dispatch<PhotosDispatchTypes>) => {
    dispatch({ type: actionTypes.GET_PHOTOS_REQUEST })

    try {
      const {data} = await getPhotosRequest();
      if (data) {
        dispatch({ type: actionTypes.GET_PHOTOS_SUCCESS, payload: data })
      }
    } catch (e) {
      dispatch({ type: actionTypes.GET_PHOTOS_ERROR })
    }
  }


export const searchPhoto = () => ({
    type: actionTypes.SEARCH_PHOTO_REQUEST,
});


export const likePhoto = () => ({
    type: actionTypes.LIKE_PHOTO_REQUEST,
});


