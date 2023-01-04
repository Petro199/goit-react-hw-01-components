import user from './../user.json';
import { Profile } from 'components/profile/Profile';
import data from './../data.json';
import { Statistics } from './statistics/Statistics';
import friends from './../friends.json';
import { FriendList } from './friendList/FriendList';
import transactions from './../transactions.json';
import { TransactionHistory } from './transaction/TransactionHistory';
export const App = () => {
  return (<>
    <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      stats={user.stats} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </>
  );
};
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
