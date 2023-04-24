import React, { useState, useEffect } from "react";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import styles from "./currencyConverter.module.scss";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Keypad from "../Keypad/Keypad";
import { ModalBoxStyles } from "../../MaterialUIStyles";
import { BsFillCalculatorFill, CgArrowsExchangeAlt } from "react-icons/all";
import axios from "axios";

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
  const [keypadModal, setKeypadModal] = useState<boolean>(false);
  const [keypadModalComplete, setKeypadComplete] = useState<boolean>(false);
  const [rememberValuesCheckbox, SetRememberValuesCheckbox] =
    useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => response.data)
      .then((data) => {
        setRates(data.rates);
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (rates[toCurrency]) {
      // @ts-ignore
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  const defaultFromCurrency = "UAE";
  const defaultToCurrency = "GPB";

  useEffect(() => {
    const localStorageFromCurrency = localStorage.getItem("fromCurrency");
    const localStorageToCurrency = localStorage.getItem("toCurrency");

    if (localStorageFromCurrency && localStorageToCurrency) {
      setFromCurrency(localStorageFromCurrency);
      setToCurrency(localStorageToCurrency);
    } else {
      setFromCurrency(defaultFromCurrency);
      setToCurrency(defaultToCurrency);
    }
  }, []);

  useEffect(() => {
    if (rememberValuesCheckbox) {
      localStorage.setItem("fromCurrency", fromCurrency);
      localStorage.setItem("toCurrency", toCurrency);
    }
  }, [fromCurrency, toCurrency, rememberValuesCheckbox]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value.replace(/^0/, "")));
  };

  const handleClose = () => {
    setKeypadModal(false);
    // setAmount(0);
  };

  return (
    <div>
      <section className={styles.input_section}>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder={"Please enter number"}
          className={styles.input}
        />

        <div className={styles.keypadIcon}>
          <BsFillCalculatorFill onClick={() => setKeypadModal(true)} />
        </div>
      </section>

      <div className={styles.modal}>
        <Modal
          open={keypadModal || keypadModalComplete}
          onClose={handleClose}
          aria-labelledby="modal-keypad"
          aria-describedby="modal keypad"
        >
          <Box sx={ModalBoxStyles}>
            <Keypad callbackFnc={setAmount} keypadClose={setKeypadModal} />
          </Box>
        </Modal>
      </div>

      <section className={styles.country_selection}>
        <CountryDropdown
          onChangeCallback={setFromCurrency}
          value={fromCurrency}
        />
        <div className={styles.exchange_icons}>
          <CgArrowsExchangeAlt />
        </div>

        <CountryDropdown onChangeCallback={setToCurrency} value={toCurrency} />
      </section>
      <div>
        <label htmlFor="remember-checkbox"> Remember values </label>
        <input
          id="remember-checkbox"
          type="checkbox"
          checked={rememberValuesCheckbox}
          onChange={() => SetRememberValuesCheckbox(!rememberValuesCheckbox)}
        />
      </div>
      {convertedAmount !== null && (
        <h2>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
        </h2>
      )}
    </div>
  );
};
export default CurrencyConverter;
