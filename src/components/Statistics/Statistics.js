import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statList}>
        {stats.map(item => (
          <li key={item.id} className={style.item}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
