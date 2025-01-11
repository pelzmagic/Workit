import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div>
      <Hero />
      <Curve />
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <Header />
      <Herobody />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="/logo-light.svg" alt="a logo" className="logo"></img>
      <button className="header_btn">Apply access</button>
    </header>
  );
}

function Curve() {
  return <img src="/ornamental.png" alt="a curve" className="curve"></img>;
}

function Herobody() {
  return (
    <div className="hero_content">
      <h1>
        Data <span>tailored</span> to your needs.
      </h1>
      <button>Learn more</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
