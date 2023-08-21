import styled from 'styled-components';

const getColor = prop => {
  // console.log(prop)
  if (prop.value < 20) {
    return 'red';
  } else if (prop.value < 40) {
    return 'orange';
  } else if (prop.value < 60) {
    return 'blue';
  } else {
    return 'grey';
  }
};

export const Stats = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 183, 255, 0.253);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsItemWrap = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${getColor};
`;

export const Label = styled.span`
  font-size: 18px;
  color: #555;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;
