import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
