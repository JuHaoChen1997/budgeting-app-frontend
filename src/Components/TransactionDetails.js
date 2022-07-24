import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const { index } = useParams();
  const [transaction, setTransaction] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/transactions/${index}`).then((response) => {
      setTransaction(response.data).catch((error) =>
        console.error("catch", error)
      );
    });
  }, [index]);

  return (
    <section>
      <div>
        <table>
          <tr>
            <td>
              <span>Item Name : </span>
            </td>
            <td>{transaction.item_name}</td>
          </tr>
          <tr>
            <td>
              <span>Amount: </span>
            </td>
            <td>{transaction.amount}</td>
          </tr>
          <tr>
            <td>
              <span>Date: </span>
            </td>
            <td>{transaction.date}</td>
          </tr>
          <tr>
            <td>
              <span>From: </span>
            </td>
            <td>{transaction.from}</td>
          </tr>
          <tr>
            <td>
              <span>Category: </span>
            </td>
            <td>{transaction.category}</td>
          </tr>
        </table>
      </div>
      <Link to="/transactions">
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
    </section>
  );
}

export default TransactionDetails;
