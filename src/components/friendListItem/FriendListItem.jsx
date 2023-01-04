import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item} >
        <span className={css.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  .isRequired).isRequired
};