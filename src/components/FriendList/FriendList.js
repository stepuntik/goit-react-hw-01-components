import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className="friends">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className={styles.item} key={id}>
        <span className={isOnline ? styles.online : styles.status} />
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
