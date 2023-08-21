import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Tag = styled.p`
  font-size: 18px;
  color: #888;
`;

export const Location = styled.p`
  font-size: 18px;
  color: #888;
  margin-top: 5px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 8px;
  background-color: rgba(0, 183, 255, 0.253);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StatsWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 16px;
  color: #555;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;
