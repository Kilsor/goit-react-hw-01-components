import PropTypes from 'prop-types';
import {
  Stats,
  Title,
  StatsList,
  StatsItem,
  StatsItemWrap,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const labelPercentageMap = {};

  stats.forEach(stat => {
    if (labelPercentageMap[stat.label]) {
      labelPercentageMap[stat.label] += stat.percentage;
    } else {
      labelPercentageMap[stat.label] = stat.percentage;
    }
  });

  const aggregatedStats = Object.keys(labelPercentageMap).map(label => ({
    label,
    percentage: labelPercentageMap[label],
  }));

  return (
    <Stats>
      {title && <Title>{title}</Title>}
      <StatsList>
        {aggregatedStats.map(stat => (
          <StatsItem key={stat.label}>
            <StatsItemWrap value={stat.percentage}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatsItemWrap>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
