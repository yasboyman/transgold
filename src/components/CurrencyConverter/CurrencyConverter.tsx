import React, { useState, useEffect } from "react";

interface ExchangeRate {
  [key: string]: number;
}

interface Props {}

const CurrencyConverter: React.FC<Props> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [rates, setRates] = useState<ExchangeRate>({});

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value);
  };

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  return (
    <div>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="AED">UAE</option>
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="AED">UAE</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      {convertedAmount !== null && (
        <h2>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default CurrencyConverter;
