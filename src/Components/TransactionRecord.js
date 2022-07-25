import { Link } from "react-router-dom";
import "./TransactionRecord.css";

function TransactionRecord(props) {
  const { date, item_name, amount } = props.transaction;
  const { index } = props;

  return (
    <tr>
      <td className="date">{date}</td>
      <td className="itemName">
        <Link to={`/transactions/${index}`}>{item_name} </Link>
      </td>
      <td className="amount">{amount}</td>
    </tr>
  );
}

export default TransactionRecord;
