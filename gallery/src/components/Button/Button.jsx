import PropTypes from "prop-types";
import { ButtonElement, ButtonWrapper } from "./Button.styled";
import { ClipLoader } from "react-spinners";

export const Button = ({ onClick, loading }) => {
  return (
    <ButtonWrapper>
      <ButtonElement type="button" onClick={onClick}>
        <ClipLoader size={18} color="#fff" loading={loading} />
        <p>Load more</p>
      </ButtonElement>
    </ButtonWrapper>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};
