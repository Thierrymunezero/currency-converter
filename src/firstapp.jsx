import React, { useState } from "react";
import Final from "./components/Final";
import Initial from "./components/Initialcurrency";
const App = () => {
  const [loading, setLoading] = useState(false);
  async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    if (amount === "" || amount < 0) {
      resultElement.innerHTML = "Please enter an amount.";
      return;
    }

    // Fetch exchange rate data from API (use your API key from exchange rate providers like Fixer.io or Open Exchange Rates)

    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(response);
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);

      resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      resultElement.innerHTML = "Error fetching exchange rate.";
    } finally {
      setLoading(false);
    }
  }
  convertCurrency();

  return (
    <div>
      <div className="converter">
        <h1>Forex Exchange</h1>

        <input
          type="number"
          id="amount"
          min="0"
          placeholder="Enter amount"
          onInput={(e) => e.target.validity.valid || (e.target.value = "")}
        />

        <Initial />
        <Final />
        <button onClick={convertCurrency}>
          {loading ? "Loading.." : "Convert"}
        </button>
        <div className="result" id="result"></div>
      </div>
    </div>
  );
};
export default App;
