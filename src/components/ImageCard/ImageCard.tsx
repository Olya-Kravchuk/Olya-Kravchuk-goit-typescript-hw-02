import React, { FC, MouseEventHandler } from "react";
import css from "./ImageCard.module.css";
import { Photo } from "../../types";

interface ImageCardProps {
  photo: Photo;
  openModal: MouseEventHandler<HTMLImageElement>;
}

const ImageCard: FC<ImageCardProps> = ({photo, onClick }) => {
  const handleClick: MouseEventHandler<HTMLImageElement> = (event) => {
    onClick(event);
  };

  return (
      <div className={css.container}>
          <img className={css.img} src={photo.urls.small} alt={photo.alt_description} onClick={handleClick}/>
      </div>
  )
}

export default ImageCard;



