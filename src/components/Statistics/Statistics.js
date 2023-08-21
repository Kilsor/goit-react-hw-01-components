import {
  Stats,
  Title,
  StatsList,
  StatsItem,
  StatsItemWrap,
  Label,
  Percentage
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
  return (
    <Stats>
      <Title>Upload stats</Title>
      <StatsList>
        {stats.map(stat => (
          <StatsItem key={stat.id}>
            <StatsItemWrap>
              <Label>{stat.label}</Label>
              <Percentage value={stat.percentage}>{stat.percentage}%</Percentage>
            </StatsItemWrap>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
};