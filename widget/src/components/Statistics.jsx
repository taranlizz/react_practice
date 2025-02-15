import PropTypes from "prop-types";

export const Statistics = ({ stats: { good, neutral, bad }, total }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {total ? Math.round((good / total) * 100) : 0}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
};
