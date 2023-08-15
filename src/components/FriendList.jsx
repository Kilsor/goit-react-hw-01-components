import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} />
      ))}
    </ul>
  );
};
