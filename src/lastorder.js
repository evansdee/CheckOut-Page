import React from "react";
import { FaCaretDown, FaCaretUp, FaQuestionCircle } from "react-icons/fa";
import orderArray from "./order";

import OrderList from "./orderlist";

export default function LastOrder({ inputForm }) {
  const [isBool, setIsBool] = React.useState(false);

  const orderReduce = orderArray.reduce((acc, ele) => {
    return acc + ele.price;
  }, 0);
  const num = 55000;

  const xyz = orderArray.reduce((acc, ele) => {
    return acc + ele.itemCount;
  }, 0);

  const shipping =
    inputForm.country !== "Nigeria" ?? inputForm.country !== "Ghana" ? num : 0;

  const slideInStyle = {
    maxHeight: "500px",
  };

  const slideOutStyle = {
    maxHeight: "0px",
    padding: "0",
    margin: "0",
    transition: "all .7s",
    overflowY: "hidden",
    background: "transparent",
  };

  React.useEffect(()=>{
    if(window.innerWidth > 1000) return setIsBool(true) 
  },[])

  return (
    <div className="summary in">
      <header>
        <p>Order Summary ({xyz})</p>

        <h1 onClick={() => setIsBool((prev) => !prev)}>
          {isBool ? "Hide" : "Show"}
          {isBool ? (
            <FaCaretUp style={{ marginLeft: ".5em" }} />
          ) : (
            <FaCaretDown style={{ marginLeft: ".5em" }} />
          )}
        </h1>
      </header>

      <main
        style={isBool ? { ...slideOutStyle, ...slideInStyle } : slideOutStyle}
      >
        <OrderList orderArray={orderArray} />
      </main>
      <Discount />
      <Total
        orderReduce={orderReduce}
        shipping={shipping}
        inputForm={inputForm}
      />

      <div className="btn">
        <button>Pay now</button>
      </div>
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

function Total({ orderReduce, inputForm, shipping }) {
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
          {inputForm.country !== "Nigeria"
            ? "N55,000.00"
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
