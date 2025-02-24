import PropTypes from "prop-types";
import { Component } from "react";
import { Overlay, Image } from "./Modal.styled";
import { createPortal } from "react-dom";

export class Modal extends Component {
  static propTypes = {
    image: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onEscKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscKeyDown);
  }

  onEscKeyDown = (evt) => {
    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  onOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { fullImgURL, alt } = this.props.image;

    return createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <Image src={fullImgURL} alt={alt} />
      </Overlay>,
      document.getElementById("modal-root")
    );
  }
}
