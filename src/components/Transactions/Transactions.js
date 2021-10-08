import PropTypes from 'prop-types';
import style from './Transactions.module.css';

export default function Transactions({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.thead}>
        <tr>
          <th className={style.headerLine}>Type</th>
          <th className={style.headerLine}>Amount</th>
          <th className={style.headerLine}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={style.row}>
            <td className={style.item}>{item.type}</td>
            <td className={style.item}>{item.amount}</td>
            <td className={style.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
