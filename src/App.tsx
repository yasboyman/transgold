import "./App.scss";
import Tabs from "./components/Tabs/Tabs";

const App = () => {
  return (
    <div className="App">
      <h1>Transgold</h1>
      <div className="card">
        <Tabs />
      </div>
      <p className="read-the-docs">Copyright © 2023 Yasboyman</p>
    </div>
  );
};

export default App;
