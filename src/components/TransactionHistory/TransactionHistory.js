import {
  Transactions,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableDataCell,
  TableCurrencyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TableHead>
        <tr>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableDataCell>{item.type}</TableDataCell>
            <TableDataCell>{item.amount}</TableDataCell>
            <TableCurrencyCell>{item.currency}</TableCurrencyCell>
          </TableRow>
        ))}
      </TableBody>
    </Transactions>
  );
};
