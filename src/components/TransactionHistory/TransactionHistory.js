import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tableHeading}>
      <tr>
        <th className={styles.headingCell}>Type</th>
        <th className={styles.headingCell}>Amount</th>
        <th className={styles.headingCell}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return (
          <tr className={styles.tableRow} key={id}>
            <td className={styles.rowCell}>{type}</td>
            <td className={styles.rowCell}>{amount}</td>
            <td className={styles.rowCell}>{currency}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;
