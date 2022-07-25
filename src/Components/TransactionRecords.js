import { useState, useEffect } from "react";
import axios from "axios";
import TransacationRecord from "./TransactionRecord";
import "./TransactionRecords.css";

//API url
const API = process.env.REACT_APP_API_URL;

//helper function determines color of bank amount
const colorOfAmount = (amount) => {
  if (amount > 1000) {
    return "green";
  } else if (amount >= 0) {
    return "yellow";
  } else {
    return "red";
  }
};

function TransacationRecords() {
  const [transactions, setTransactions] = useState([]);
  const [accountTotal, setAccountTotal] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setAccountTotal(
      transactions.reduce((acc, ele) => (acc += parseInt(ele.amount)), 0)
    );
  }, [transactions]);

  return (
    <section className="transactions">
      <h2>
        Bank Account Total:{" "}
        <span className={colorOfAmount(accountTotal)}>{accountTotal}</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Transaction Name</th>
            <th scope="col">Amount($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <TransacationRecord
                transaction={transaction}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default TransacationRecords;
