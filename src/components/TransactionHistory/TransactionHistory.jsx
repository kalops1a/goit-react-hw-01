
import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableHeader}>Type</th>
      <th className={css.tableHeader}>Amount</th>
      <th className={css.tableHeader}>Currency</th>
    </tr>
  </thead>
      
  <tbody>
    {items.map(item => (
      <tr key={item.id}>
      <td className={css.tableItem}>{item.type}</td>
      <td className={css.tableItem}>{item.amount}</td>
      <td className={css.tableItem}>{item.currency}</td>
    </tr>
      ))}
  </tbody>
</table>

  )
}

