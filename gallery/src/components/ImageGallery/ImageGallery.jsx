import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";
import PropTypes from "prop-types";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <List>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            previewImgURL={webformatURL}
            fullImgURL={largeImageURL}
            alt={tags}
            onImageClick={onImageClick}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func,
};
