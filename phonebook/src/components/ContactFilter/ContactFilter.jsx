import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Label } from "./ContactFilter.styled";

const ContactFilter = ({ value, onChange }) => {
  const searchInputId = nanoid();
  return (
    <search>
      <Label htmlFor={searchInputId}>Find contacts by name</Label>
      <input
        type="search"
        name="filter"
        id={searchInputId}
        value={value}
        onChange={onChange}
      />
    </search>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
