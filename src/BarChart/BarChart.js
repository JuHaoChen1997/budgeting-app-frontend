import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

//Resource that I use
// https://stackoverflow.com/questions/70098392/react-chartjs-2-with-chartjs-3-error-arc-is-not-a-registered-element
//and
//https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript

function randomColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

let inputData = {
  labels: [],
  datasets: [
    {
      label: [],
      data: [],
      backgroundColor: [],
      hoverOffset: 4,
    },
  ],
};

function LineChart() {
  let [labels, setLabels] = useState([]);
  let [data, setData] = useState([]);
  let [backGroundColor, setBackGroundColor] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        const transactions = res.data;

        setLabels(
          transactions.map((transaction) => {
            return transaction.item_name;
          })
        );

        setData(
          transactions.map((transaction) => {
            return parseInt(transaction.amount);
          })
        );

        setBackGroundColor((transaction) => {
          return randomColorGenerator();
        });
      })
      .catch((error) => console.log(error));
  }, []);

  inputData = {
    labels: labels,
    datasets: [
      {
        label: "Transactions",
        data: data,
        backgroundColor: backGroundColor,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="barChart">
      <Bar data={inputData} />{" "}
    </div>
  );
}

export default LineChart;
