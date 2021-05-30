import React from 'react';

import user from '../database/user.json';
import statisticalData from '../database/statistical-data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const { name, tag, location, avatar, stats } = user;

const App = () => (
  <div>
    <Profile
      name={name}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
    />
    <Stats title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export default App;
