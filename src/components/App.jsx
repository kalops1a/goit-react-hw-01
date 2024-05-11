import userData from "../userData.json";
import { Profile } from "./Profile/Profile";
import friends from "../friendlist.json";
import { FriendList } from "./FriendList/FriendList";
import transactions from "../transactionhistory.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import "modern-normalize";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};






