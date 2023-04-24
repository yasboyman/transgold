import React, { useEffect, useState } from "react";
import styles from "./keypad.module.scss";
import { AiFillCloseCircle, GiConfirmed } from "react-icons/all";

const Keypad = ({ callbackFnc, keypadClose }: any) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [confirmSelected, setConfirmSelection] = useState(false);

  useEffect(() => {
    callbackFnc(displayValue);
  }, [confirmSelected]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.target as HTMLButtonElement;
    switch (value) {
      case "clear":
        setDisplayValue("0");
        break;
      default:
        if (displayValue === "0") {
          setDisplayValue(value);
        } else {
          setDisplayValue(displayValue + value);
        }
        break;
    }
  };

  const handleCloseClick = () => {
    setConfirmSelection(true);
    keypadClose(false);
  };

  const handleConfirmClick = () => {
    callbackFnc(displayValue);
    setConfirmSelection(true);
    keypadClose(false);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display} data-testid="keypad display">
        {displayValue}
      </div>
      <div className={styles.keypad}>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
        <button value="clear" onClick={handleClick}>
          C
        </button>
        <button value="0" onClick={handleClick}>
          0
        </button>
        <button value="." onClick={handleClick}>
          .
        </button>
        <section className={styles.keypad_icons}>
          <AiFillCloseCircle onClick={handleCloseClick} color={"red"} />
          <GiConfirmed onClick={handleConfirmClick} color={"green"} />
        </section>
      </div>
    </div>
  );
};

export default Keypad;
