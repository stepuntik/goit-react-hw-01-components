import React from 'react';
import PropTypes from 'prop-types';

import styles from './Stats.module.css';

const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));

const randomRGB = () => {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);

  return `rgb(${r},${g},${b})`;
};

const StatsItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomRGB() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

const Stats = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map(({ label, percentage, id }) => (
        <StatsItem label={label} percentage={percentage} key={id} />
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.arrayOf(PropTypes.object).isRequired,
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;
