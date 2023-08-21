import {
  UserFriendList,
 } from './FriendList.styled';

import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <UserFriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </UserFriendList>
  );
};
