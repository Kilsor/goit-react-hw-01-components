export const Statistics = ({ stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item">
            <div>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
