import {
  UserProfile,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  StatsWrap,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <UserProfile>
      <Description>
        <Image src={user.avatar} alt="User avatar" />
        <Name>{user.username}</Name>
        <Tag>@{user.tag}</Tag>
        <Location >{user.location}</Location>
      </Description>

      <Stats>
        <StatsWrap>
          <Label>Followers</Label>
          <Quantity>{user.stats.followers}</Quantity>
        </StatsWrap>
        <StatsWrap>
          <Label>Views</Label>
          <Quantity>{user.stats.views}</Quantity>
        </StatsWrap>
        <StatsWrap>
          <Label>Likes</Label>
          <Quantity>{user.stats.likes}</Quantity>
        </StatsWrap>
      </Stats>
    </UserProfile>
  );
};
