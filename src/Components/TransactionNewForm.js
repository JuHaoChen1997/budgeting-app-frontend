import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./TransactionNewForm.css";

//API url
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
  };

  return (
    <section className="newForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date" className="description">
            Date
          </label>
          <input
            id="date"
            value={transaction.date}
            type="date"
            onChange={handleTextChange}
            className="form-control"
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="item_name" className="description">
            Name
          </label>
          <input
            id="item_name"
            value={transaction.item_name}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            placeholder="the name of the transaction"
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="amount" className="description">
            Amount
          </label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleTextChange}
            className="form-control"
            placeholder="the amount of the expenditure/income"
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="from" className="description">
            From
          </label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            placeholder="where this expense/income has come from"
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="category" className="description">
            Category
          </label>
          <input
            id="category"
            value={transaction.category}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            placeholder="income, savings, pets, food, etc"
            required
          ></input>
        </div>
        <br />
        <button type="button" className="btn btn-outline-dark">
          Create New Item
        </button>
      </form>

      <button type="button" className="btn btn-outline-dark">
        <Link to="/transactions">Nevermind</Link>
      </button>
    </section>
  );
}

export default TransactionNewForm;
