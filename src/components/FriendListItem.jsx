export const FriendListItem = ({ friend: { id, avatar, name, isOnline } }) => {
  return (
    <li key={id} class="item">
      <span class={`status ${isOnline ? 'online' : 'offline'}`}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};
