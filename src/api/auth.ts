import axios from "axios";

export const loginUserRequest = (payload: string) => {
  return axios.post("https://unsplash.com/oauth/token", {
    client_id: "tx30kLeBRf2728bcXdJaOFqxR3Ly8Sbq_4C7mPv0njA",
    client_secret: "PimjxD7yQd9fX92uZJAUopmtP5ZAsX3BokJcTyecpss",
    redirect_uri: "http://localhost:3000/login",
    code: payload,
    grant_type: "authorization_code"
  });
};

export const getUserDetailsRequest = () => {
  return axios.get("https://api.unsplash.com/me");
};


