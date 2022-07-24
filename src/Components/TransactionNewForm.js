import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            value={transaction.date}
            type="date"
            onChange={handleTextChange}
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="item_name">Name</label>
          <input
            id="item_name"
            value={transaction.name}
            type="text"
            onChange={handleTextChange}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleTextChange}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="from">From</label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleTextChange}
          ></input>
        </div>
        <br />
        <input type="submit" value="Create New Item" />
      </form>
    </section>
  );
}

export default TransactionNewForm;
