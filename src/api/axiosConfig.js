import axios from 'axios';

const registerRequestIntercept = () => {
    axios.interceptors.request.use(async request => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          request.headers = {
            "Authorization": `Bearer ${token}`,
          };
        } else {
          request.headers = {};
        }
      } catch (error) {
        console.error("error in response request", error);
      }
      return request;
    });
  };

export const configureAxios = () => {
    registerRequestIntercept();
  };
  

export const configureAxiosHeaders = (auth_token) => {
    axios.defaults.headers["Authorization"] = `Bearer ${auth_token}`;
  };