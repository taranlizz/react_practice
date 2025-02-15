import PropTypes from "prop-types";

export const Controls = ({ options, onClick }) => {
  return (
    <div>
      {options.map((option, idx) => {
        return (
          <button type="button" key={idx} onClick={() => onClick(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

Controls.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};
