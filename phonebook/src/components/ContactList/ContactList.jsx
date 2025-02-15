import PropTypes from "prop-types";
import { List, ListItem } from "./ContactList.styled";

function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
