import styled from 'styled-components';

const getColor = props => {
  if (props.status === 'true') {
    return props.theme.colors.green;
  } else if (props.status === 'false') {
    return props.theme.colors.red;
  } else {
    return props.theme.colors.grey;
  }
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  `;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${getColor};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
`;
