import React from "react";
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter";
import CountryDropdown from "../CountryDropdown/CountryDropdown";

const FirstTab = () => {
  return (
    <div>
        <CountryDropdown/>
      <CurrencyConverter />
    </div>
  );
};

export default FirstTab;
