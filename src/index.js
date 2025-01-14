import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div>
      <Hero />
      <Curve />
      <Main />
      <SecondCurve />
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
      <button className="hero_btn">Learn more</button>
      <div className="phone-container">
        <img src="/image-hero.webp" alt="a cellphone" className="phone"></img>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main className="main">
      <div className="features_container">
        <Feature number="1" action="Actionable insights" about="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics" />
        <Feature
          number="2"
          action="Data-driven decisions"
          about="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
        />
        <Feature
          number="3"
          action="Always affordable"
          about="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees"
        />
      </div>
    </main>
  );
}

function Feature({ number, action, about }) {
  return (
    <div className="features_wrapper">
      <div className="number">{number}</div>
      <p className="feature_action">{action}</p>
      <p className="feature_about">{about}</p>
    </div>
  );
}
function SecondCurve() {
  return <img src="/ornamental2.png" alt="second curve" className="second_curve"></img>;
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
