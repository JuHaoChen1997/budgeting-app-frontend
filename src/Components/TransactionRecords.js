import { useState, useEffect } from "react";
import axios from "axios";
import TransacationRecord from "./TransactionReacord";

//API url
const API = process.env.REACT_APP_API_URL;

function TransacationRecords() {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <></>;
}

export default TransacationRecords;
