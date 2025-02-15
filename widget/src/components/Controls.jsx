import PropTypes from "prop-types";

export const Controls = ({ options, onClick }) => {
  const [good, neutral, bad] = options;
  return (
    <div>
      <button type="button" onClick={() => onClick(good)}>
        {good}
      </button>
      <button type="button" onClick={() => onClick(neutral)}>
        {neutral}
      </button>
      <button type="button" onClick={() => onClick(bad)}>
        {bad}
      </button>
    </div>
  );
};

Controls.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};
