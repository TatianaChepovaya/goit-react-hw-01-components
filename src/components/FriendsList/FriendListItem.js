import PropTypes from 'prop-types';
import style from './FriendsList.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={style.friendslistItem}>
      <span
        className={isOnline ? style.statusOnline : style.statusOffline}
      ></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
