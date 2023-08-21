import styled from 'styled-components';

const getColor = percentage => {
    console.log(percentage)
  if (percentage < 20) {
    return 'red';
  } else if (percentage < 40) {
    return 'orange';
  } else if (percentage < 60) {
    return 'blue';
  } else {
    return 'green';
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
  
  padding: 10px;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${getColor};
`;

export const Label = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Percentage = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;
