import { FC, ReactElement } from "react";
import ImageList from "@mui/material/ImageList";
import { PhotoComp } from "./";

interface PhotoListObject {
  photos: Photo[];
}

export const PhotoList: FC<PhotoListObject> = ({
  photos,
}: PhotoListObject): ReactElement => {
  return (
    <>
      <ImageList cols={5} gap={16}>
        {photos.map((photo: Photo) => (
          <PhotoComp photo={photo} key={photo.id} />
        ))}
      </ImageList>
    </>
  );
};
