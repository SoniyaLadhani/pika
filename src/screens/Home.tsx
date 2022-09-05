import { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../redux";
import { AppDispatch } from "../redux";
import { PhotoList } from "../components";
import { getPhotos } from "../redux/actions/photoActions";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const photos: Photo[] = useSelector(
    (state: RootStore) => state.photosReducer.photos,
  );
  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{ px: "10rem" }}
    >
      <PhotoList photos={photos} />
    </Box>
  );
};
