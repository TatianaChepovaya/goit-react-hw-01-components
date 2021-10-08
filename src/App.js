import Profile from './components/Profile/Profile';
import user from './json/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';

import FriendsList from './components/FriendsList/FriendsList';
import friends from './json/friends.json';

import Transactions from './components/Transactions/Transactions';
import transactions from './json/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
    </>
  );
}

//       <TransactionHistory items={transactions} />
