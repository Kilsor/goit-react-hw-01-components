import styled from 'styled-components';

const getColor = props => {
  if (props.value < 20) {
    return props.theme.colors.red;
  } else if (props.value < 40) {
    return props.theme.colors.orange;
  } else if (props.value < 60) {
    return props.theme.colors.blue;
  } else {
    return props.theme.colors.grey;
  }
};

export const Stats = styled.div`
  width: 300px;
  background-color: ${props => props.theme.colors.white};
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
  color: ${props => props.theme.colors.text};
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.colors.background};
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
  font-size: 16px;
  color: ${props => props.theme.colors.secondarytext};
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-top: 5px;
`;
