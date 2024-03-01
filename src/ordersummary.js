import React from "react";
import { FaCaretDown, FaCaretUp, FaQuestionCircle } from "react-icons/fa";
import orderArray from "./order";

import OrderList from "./orderlist";

export default function OrderSummarry({ inputForm }) {
  const [isBool, setIsBool] = React.useState(false);

  const orderReduce = orderArray.reduce((acc, ele) => {
    return acc + ele.price;
  }, 0);
  const num = 55000;


  const shipping =
  inputForm.country !== "Nigeria" ?? inputForm.country!=="Ghana"
    ? num
    : 0;

    const slideInStyle ={
      maxHeight:'500px',
    }
  
    const slideOutStyle={
      maxHeight:'0px',
      padding:'0',
      margin:'0',
      transition:"all .7s",
      overflowY:'hidden',
    }

  return (
    <div className="summary out">
      <header>
        <h1 onClick={() => setIsBool((prev) => !prev)}>
          {isBool ? "Hide order summary" : "Show order summary"}
          {isBool ? (
            <FaCaretUp style={{ marginLeft: ".5em" }} />
          ) : (
            <FaCaretDown style={{ marginLeft: ".5em" }} />
          )}
        </h1>

        <p>N{orderReduce+shipping}.00</p>
      </header>
     
        <main style={isBool ? {...slideOutStyle,...slideInStyle}:slideOutStyle}>
          <OrderList orderArray={orderArray} />
          <Discount />
          <Total orderReduce={orderReduce} shipping={shipping} inputForm={inputForm} />
        </main>
      
    </div>
  );
}

function Discount() {
  const [input, setInput] = React.useState("");
  return (
    <div className="discount">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Discount code or gift card"
      />
      <button
        style={
          input.length > 0
            ? {
                color: "#fff",
                background: "#28282b",
                transition: "all .6s ease-in-out",
              }
            : {}
        }
      >
        Apply
      </button>
    </div>
  );
}

function Total({ orderReduce, inputForm,shipping }) {


  return (
    <div className="total">
      <p>
        <span>Subtotal</span>
        <span>N{orderReduce}.00</span>
      </p>
      <p>
        <span>
          Shipping <FaQuestionCircle style={{ marginLeft: ".3em" }} />
        </span>
        <span style={{ fontSize: ".7em" }}>
          {inputForm.country !== "Nigeria" ? "N55,000.00"
            : "Enter shipping address"}
        </span>
      </p>
      <p>
        <span>Total</span>
        <span>NGN N{orderReduce + shipping}.00</span>
      </p>
    </div>
  );
}
