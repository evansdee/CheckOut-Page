import React from "react"
import BillingAddress from "./billingaddress";

export default function Billing(){
    
  const [isCheck, setIsCheck] = React.useState("shipping");
  const [isSelected, setIsSelected] = React.useState(false);
    return (
        <div className="billing">
          <h3>Billing</h3>
    
          <Means>
            <div className="means">
              <One>
                <label
                  htmlFor="shiping"
                  onClick={() => setIsSelected(false)}
                  className={isSelected ? "notActive" : "active"}
                >
                  <p>
                    <input
                      id="shiping"
                      checked={isCheck === "shipping"}
                      type="radio"
                      name="isCheck"
                      value="shipping"
                      onChange={(e) => setIsCheck(e.target.value)}
                    />
                    Same as shipping address
                  </p>
                </label>
              </One>
    
              <One>
                <label
                  htmlFor="bill"
                  className={isSelected ? "active" : "notActive"}
                  onClick={() => setIsSelected(true)}
                >
                  <p>
                    <input
                      id="bill"
                      checked={isCheck === "bill"}
                      type="radio"
                      name="isCheck"
                      value="bill"
                      onChange={(e) => setIsCheck(e.target.value)}
                    />
                    Use a different billing address
                  </p>
                </label>
              </One>
            </div>
          </Means>

            {
                isSelected ? <BillingAddress/>:""
            }
        </div>
      );
    }
    
    function One({ children }) {
      return children;
    }
    function Means({ children }) {
      return children;
    }
    
  