import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./TransactionEditForm.css";
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
      <form onSubmit={handleSubmit} className="editForm">
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
        <div className="form-group">
          <label htmlFor="item_name" className="description">
            Name
          </label>
          <input
            id="item_name"
            value={transaction.item_name}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="amount" className="description">
            Amount
          </label>
          <input
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleTextChange}
            className="form-control"
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="from" className="description">
            From
          </label>
          <input
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            required
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="category" className="description">
            Category
          </label>
          <input
            id="category"
            value={transaction.category}
            type="text"
            onChange={handleTextChange}
            className="form-control"
            required
          ></input>
        </div>
        <br />
        <input
          type="submit"
          value="Edit Item"
          className="btn btn-outline-dark"
        />
      </form>
      <Link to={`/transactions/${index}`}>
        <button className="btn btn-outline-dark">Back</button>
      </Link>
    </section>
  );
}

export default TransactionEditForm;
