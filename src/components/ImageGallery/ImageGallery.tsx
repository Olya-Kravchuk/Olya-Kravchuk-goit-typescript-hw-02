import React, { FC, MouseEventHandler } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo[];
  handleImageClick: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, handleImageClick }) => {
  return (
    <ul className={css.ul}>
      {photos.map((photo, index) => (
        <li className={css.li} key={photo.id}>
          <ImageCard photo={photo} onClick={() => handleImageClick(photo)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;