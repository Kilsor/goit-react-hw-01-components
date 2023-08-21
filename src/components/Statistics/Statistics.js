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
  // Створюємо об'єкт, де ключ - це stat.label, а значення - сума відповідних значень stat.percentage
  const labelPercentageMap = {};

  // Проходимося по кожному статистичному об'єкту та додаємо значення stat.percentage
  stats.forEach(stat => {
    if (labelPercentageMap[stat.label]) {
      labelPercentageMap[stat.label] += stat.percentage;
    } else {
      labelPercentageMap[stat.label] = stat.percentage;
    }
  });

  // Створюємо масив з унікальними значеннями label та сумами їхніх percentages
  const aggregatedStats = Object.keys(labelPercentageMap).map(label => ({
    label,
    percentage: labelPercentageMap[label]
  }));

  return (
    <Stats>
      <Title>Upload stats</Title>
      <StatsList>
        {aggregatedStats.map(stat => (
          <StatsItem key={stat.label}>
            <StatsItemWrap  value={stat.percentage}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatsItemWrap>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
};
