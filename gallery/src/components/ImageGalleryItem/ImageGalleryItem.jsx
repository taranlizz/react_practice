import { Item, Image } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";

export const ImageGalleryItem = ({
  previewImgURL,
  fullImgURL,
  alt,
  onImageClick,
}) => {
  return (
    <Item>
      <Image
        onClick={() => onImageClick({ fullImgURL, alt })}
        src={previewImgURL}
        alt={alt}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  previewImgURL: PropTypes.string.isRequired,
  fullImgURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
