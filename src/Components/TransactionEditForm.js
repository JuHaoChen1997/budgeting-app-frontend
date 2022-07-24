import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  const { index } = useParams();

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction(transaction);
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
            value={transaction.item_name}
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

export default TransactionEditForm;
