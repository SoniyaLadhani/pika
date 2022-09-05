import { FC, ReactElement } from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { RootStore } from "../redux";
import { useSelector } from "react-redux";

export const PhotoComp: FC<PhotoListItem> = ({
  photo,
}: PhotoListItem): ReactElement => {
  const { alt_description, description, urls, user } = photo;
  const signedIn: boolean = useSelector(
    (state: RootStore) => state.authReducer.signedIn,
  );

  return (
    <>
      <ImageListItem>
        <img
          src={urls.regular}
          alt={alt_description ? alt_description : ""}
          loading="lazy"
        />
        <ImageListItemBar
          title={description}
          subtitle={user.username}
          actionIcon={
            <IconButton
              sx={{ color: "primary.overlay" }}
              aria-label={`info about ${description}`}
            >
              {signedIn ? <FavoriteIcon /> : null}
            </IconButton>
          }
        />
      </ImageListItem>
    </>
  );
};
