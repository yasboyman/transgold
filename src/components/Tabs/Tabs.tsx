import React, { useState } from "react";
import styles from "./tabs.module.scss";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <div className={styles.Tabs}>
      <ul className={styles.nav}>
        <li
          className={activeTab === "tab1" ? styles.active : ""}
          onClick={handleTab1}
          data-testid={'currencyTab'}
        >
          Currency Converter
        </li>
        <li
          className={activeTab === "tab2" ? styles.active : ""}
          onClick={handleTab2}
          data-testid={'goldTab'}
        >
          Gold Converter
        </li>
      </ul>

      <div className={styles.outlet}>
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
