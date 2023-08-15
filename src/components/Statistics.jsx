export const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li key={stat.id} class="item">
            <div>
              <span class="label">{stat.label}</span>
              <span class="percentage">{stat.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
