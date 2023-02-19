import React, {MouseEventHandler, useState} from "react";
import styles from "./keypad.module.scss";
import under_construction from "../../assets/under_construction.jpg";

const Keypad = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case "clear":
        setDisplayValue("0");
        break;
      case "equal":
        try {
          const evalValue = eval(displayValue);
          setDisplayValue(evalValue.toString());
        } catch (error) {
          setDisplayValue("Error");
        }
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


  return (
    <div className={styles.calculator}>
      {/*<p>Please watch this space. we will be adding more content here in due course</p>*/}
      {/*<section >*/}
      {/*    <img src={under_construction} alt={'under construction icon'} className={styles.no_content_image}/>*/}
      {/*</section>*/}
      <div className={styles.display}>{displayValue}</div>
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
        <button value="equal" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Keypad;
