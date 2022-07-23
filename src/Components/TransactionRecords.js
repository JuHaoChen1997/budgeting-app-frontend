import { useState, useEffect } from "react";
import axios from "axios";
import TransacationRecord from "./TransactionRecord";

//API url
const API = process.env.REACT_APP_API_URL;

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
    <section>
      <h2>
        Bank Account Total: <span>{accountTotal}</span>
      </h2>
      <table>
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
