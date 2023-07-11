import "./App.scss";
import Tabs from "./components/Tabs/Tabs";
import CookieConsent from "react-cookie-consent";


const App = () => {
  return (
    <div className="App">
      <h1>Transgold</h1>
      <div className="card">
        <Tabs />
      </div>
      <p className="read-the-docs">Copyright © 2023 Yasboyman</p>
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  );
};

export default App;
