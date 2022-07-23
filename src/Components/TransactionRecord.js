import { Link } from "react-router-dom";

function TransactionRecord(props) {
  const { date, item_name, amount } = props.transaction;
  const { index } = props;

  return (
    <tr>
      <td>{date}</td>

      <td>
        <Link to={`/transactions/${index}`}>{item_name} </Link>
      </td>

      <td>{amount}</td>
    </tr>
  );
}

export default TransactionRecord;
