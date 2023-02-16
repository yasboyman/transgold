import { useState } from "react";
import "./App.scss";
import Tabs from "./components/Tabs/Tabs";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Transactions</h1>
        <div className="card">
          <Tabs />
        </div>
        <p className="read-the-docs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          atque dolorem doloremque doloribus esse ipsam, iste iure laudantium
          numquam officiis unde voluptatibus? Expedita iure laborum officiis
          repellendus similique tenetur voluptate....
        </p>
      </div>
    </>
  );
};

export default App;
