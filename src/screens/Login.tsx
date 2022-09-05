import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

import { loginUser } from "../redux/actions/authActions";
import { AppDispatch } from "../redux";

const REACT_APP_OAUTH_PATH =
  "https://unsplash.com/oauth/authorize?client_id=tx30kLeBRf2728bcXdJaOFqxR3Ly8Sbq_4C7mPv0njA&redirect_uri=http://localhost:3000/login&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections";

export const Login = () => {
  const { search } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (search.includes("code")) {
      const payload = search.split("=")[1];
      dispatch(loginUser(payload));
    }
  }, [search]);

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      pt="10rem"
    >
      <Button href={REACT_APP_OAUTH_PATH} variant="contained" color="primary">
        Authorize by unsplash.com
      </Button>
    </Box>
  );
};
