import { FC, ReactElement } from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const PhotoComp: FC<PhotoListItem> = ({
  photo,
}: PhotoListItem): ReactElement => {
  const { alt_description, description, urls, user } = photo;

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
              <FavoriteIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    </>
  );
};
