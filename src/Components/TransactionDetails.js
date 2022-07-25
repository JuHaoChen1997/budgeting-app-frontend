import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./TransactionDetail.css";
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const { index } = useParams();
  const [transaction, setTransaction] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((error) => console.error("catch", error));
  }, [index]);

  const deleteTransaction = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((response) => {
        navigate("/transactions");
      })
      .catch((error) => console.error("catch", error));
  };

  return (
    <section className="details">
      <div>
        <table className="table table-dark">
          <tbody>
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
          </tbody>
        </table>
      </div>
      <Link to="/transactions">
        <button type="button" className="btn btn-outline-dark">
          Back
        </button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button type="button" className="btn btn-outline-dark">
          Edit
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-outline-dark"
        onClick={deleteTransaction}
      >
        Delete
      </button>
    </section>
  );
}

export default TransactionDetails;
