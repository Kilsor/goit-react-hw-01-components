import styled from 'styled-components';

export const Transactions = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableDataCell = styled.td`
  padding: 10px;
  text-align: left;
`;

export const TableCurrencyCell = styled(TableDataCell)`
  text-transform: uppercase;
`;
