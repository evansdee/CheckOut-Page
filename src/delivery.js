import React from "react";
import { FaStore, FaTruck } from "react-icons/fa";
import PickUpDelivery from "./pickupdelivery";
import ShipDelivery from "./shipdelivery";

export default function Delivery({inputForm,formData}) {


  const [isChecke, setIsChecke] = React.useState("ship");
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="delivery-container">
      <h3>Delivery</h3>

      <Means>
        <div className="means">
          <One>
            <label
              htmlFor="ship"
              onClick={() => setIsSelected(false)}
              className={isSelected ? "notActive" : "active"}
            >
              <p>
                <input
                  id="ship"
                  checked={isChecke === "ship"}
                  type="radio"
                  name="isChecke"
                  value="ship"
                  onChange={(e) => setIsChecke(e.target.value)}
                />
                Ship
              </p>
              <FaTruck />
            </label>
          </One>

          <One>
            <label
              htmlFor="pick"
              className={isSelected ? "active" : "notActive"}
              onClick={() => setIsSelected(true)}
            >
              <p>
                <input
                  id="pick"
                  checked={isChecke === "pick"}
                  type="radio"
                  name="isChecke"
                  value="pick"
                  onChange={(e) => setIsChecke(e.target.value)}
                />
                Pick up
              </p>
              <FaStore />
            </label>
          </One>
        </div>
      </Means>

      {!isSelected ? (
        <ShipDelivery inputForm={inputForm} onFormChange={formData} />
      ) : (
        <PickUpDelivery />
      )}
    </div>
  );
}

function One({ children }) {
  return children;
}
function Means({ children }) {
  return children;
}
