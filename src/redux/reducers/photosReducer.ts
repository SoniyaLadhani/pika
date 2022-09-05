import { actionTypes } from "../actions/actionTypes";

const initialState: PhotoState = {
 photos: []
};

export const photosReducer = (state: PhotoState = initialState, action: PhotoAction): PhotoState => {
  switch (action.type) {
    case actionTypes.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
      };

    default:
      return state;
  }
};

