import React from "react";
import {
  FaCcAmazonPay,
  FaCcAmex,
  FaCcApplePay,
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaCreditCard,
} from "react-icons/fa";

export default function Payment() {
  const [isBool, setisBool] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState("paystack");
  const [work,setWork] = React.useState(false)

  const slideInStyle = {
    padding: "1.5em",
    background: "#ddd",
    maxHeight: "200px",
    transition: "all .5s",
    overflowY: "hidden",
  };
  const fadeInStyle = {
    background: "#ddd",
    padding: '1em',
    marginTop:'-.5em',
    maxHeight: "200px",
  };

  const fadeOutStyle = {
    maxHeight: "0px",
    padding: "0",
    marginTop: "0",
    transition: "all .5s",
    overflowY: "hidden",
  };
  const slideOutStyle = {
    maxHeight: "0px",
    padding: "0",
    margin: "0",
  };

  return (
    <div className="payment">
      <h3>Payment</h3>
      <p>All transactions are secure and encrypted</p>

      <div className="payment-option">
        <label
          onClick={() => setisBool(false)}
          htmlFor="paystack"
          style={
            !isBool
              ? { border: "1.5px solid #28282b", background: "#ddd" }
              : { border: "1px solid #ddd" }
          }
        >
          <input
            type="radio"
            id="paystack"
            checked={isChecked === "paystack"}
            value="paystack"
            name="isChecked"
            onChange={(e) => setIsChecked(e.target.value)}
          />
          <p>Paystack</p>

          <div className="payment-icons">
            <FaCcMastercard color="orangered" />
            <FaCcVisa color="darkblue" />
            <FaCcPaypal color="#28282b" />
            <PlusFour setWork={setWork}>
              +4
            </PlusFour>
          </div>
          <section className="hov-con" style={work?{display:'block'}:{display:'none'}}>
            <FaCcAmazonPay color="aqua"/>
            <FaCcAmex color="orangered"/>
            <FaCcApplePay color="brown"/>
            <FaCcDiscover color="lightblue" />
          </section>
        </label>
        <div
          className="paystack-body"
          style={isBool ? { ...slideInStyle, ...slideOutStyle } : slideInStyle}
        >
          <FaCreditCard style={{ fontSize: "7em" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
            sapiente aliquam exercitationem eos?
          </p>
        </div>
        <label
          onClick={() => setisBool(true)}
          htmlFor="bank"
          style={
            isBool
              ? { border: "1.5px solid #28282b", background: "#ddd" }
              : { border: "1px solid #ddd" }
          }
        >
          <input
            type="radio"
            id="bank"
            checked={isChecked === "bank"}
            value="bank"
            name="isChecked"
            onChange={(e) => setIsChecked(e.target.value)}
          />
          <p>Bank Transfer</p>
        </label>
        <div
          className="bank-body"
          style={isBool ? { ...fadeOutStyle, ...fadeInStyle } : fadeOutStyle}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quos
          aliquid similique doloremque asperiores delectus maiores totam ullam
          optio quaerat mollitia corporis inventore nihil beatae voluptas
          perspiciatis consectetur soluta, ratione quidem quia! Quaerat vero
          temporibus atque? Temporibus veniam nulla ad, quasi quia iste aliquid
          laborum cum rem, quam corrupti accusantium.
        </div>
      </div>
    </div>
  );
}

function PlusFour({ children,setWork}) { 
  return <div onMouseEnter={()=>setWork(true)} onMouseLeave={()=>setWork(false)}>{children}</div>;
}
