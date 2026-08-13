import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currencies, setCurrencies] = useState(["USD", "INR"]);
  const [rates, setRates] = useState({ USD: 1, INR: 83.2 });

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("83.20");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.rates) {
          setRates(data.rates);
          setCurrencies(Object.keys(data.rates));
        }
      })
      .catch(() => {
        setRates({ USD: 1, INR: 83.2 });
        setCurrencies(["USD", "INR"]);
      });
  }, []);

  useEffect(() => {
    const numericAmount = Number(amount);

    if (!Number.isFinite(numericAmount) || !rates[from] || !rates[to]) {
      setResult("0.00");
      return;
    }

    const usdValue = numericAmount / rates[from];
    const convertedValue = usdValue * rates[to];
    setResult(convertedValue.toFixed(2));
  }, [amount, from, to, rates]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <div className="row">
        <select value={from} onChange={(event) => setFrom(event.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <span>to</span>

        <select value={to} onChange={(event) => setTo(event.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <h2>
        {amount || 0} {from} = {result} {to}
      </h2>
    </div>
  );
}

export default App;