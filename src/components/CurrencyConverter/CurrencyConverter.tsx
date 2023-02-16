import React, { useState, useEffect } from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";

interface ExchangeRate {
  [key: string]: number;
}

interface Props {}

const CurrencyConverter: React.FC<Props> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("AED");
  const [toCurrency, setToCurrency] = useState<string>("GBP");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [rates, setRates] = useState<ExchangeRate>({});

  console.log("from", fromCurrency);
  console.log("to", toCurrency);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  // const handleFromCurrencyChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setFromCurrency(event.target.value);
  // };
  //
  // const handleToCurrencyChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setToCurrency(event.target.value);
  // };

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
      <CountryDropdown
        onChangeCallback={setFromCurrency}
        value={fromCurrency}
      />
      <CountryDropdown onChangeCallback={setToCurrency} value={toCurrency} />
      {convertedAmount !== null && (
        <h2>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </h2>
      )}
    </div>
  );
};

export default CurrencyConverter;
