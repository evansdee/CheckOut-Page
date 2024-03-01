import React from "react";
import Payment from "./payment";
import NavBar from "./navbar";
import OrderSummarry from "./ordersummary";
import Delivery from "./delivery";
import Billing from "./billing";
import LastOrder from './lastorder'

function App() {
  const [inputForm, setInputForm] = React.useState({
    country: "Nigeria",
    firstName: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    state: "",
    apartment: "",
    phone: "",
    isChecked: false,
  });

  function formData(e) {
    const { name, value, type, checked } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="App">
      <NavBar />
      <form action="">
        <section>
        <OrderSummarry inputForm={inputForm} />
        <Contact />
        <Delivery inputForm={inputForm} formData={formData} />
        <Payment/>
        <Billing/>
        </section>
     
        <LastOrder inputForm={inputForm}/>
      </form>
    </div>
  );
}

export default App;

function Contact() {
  const [checkedInput, setCheckedInput] = React.useState(false);

  return (
    <div action="" className="contact">
      <div className="head">
        <h4>Contact</h4>
        <p>
          Have an account?
          <span>Log in</span>
        </p>
      </div>

      <input type="text" placeholder="Email" />
      <br />
      <input
        type="checkbox"
        checked={checkedInput}
        onChange={(e) => setCheckedInput(e.target.checked)}
        id="love"
      />
      <label htmlFor="love">Email me with news and offers</label>
    </div>
  );
}
