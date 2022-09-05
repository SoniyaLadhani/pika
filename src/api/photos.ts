import axios from "axios";

export const getPhotosRequest = () => {
  return axios.get("https://api.unsplash.com/photos/?client_id=tx30kLeBRf2728bcXdJaOFqxR3Ly8Sbq_4C7mPv0njA&per_page=50");
};



