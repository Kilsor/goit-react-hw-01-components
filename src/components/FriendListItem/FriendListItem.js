import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
  } from './FriendListItem.styled';

export const FriendListItem = ({ friend: {avatar, name, isOnline } }) => {
  return (
    <FriendItem >
      <FriendStatus status={isOnline.toString()}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
