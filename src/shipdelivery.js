import React from "react";
import SelectCountry from "./selectountry";
import SelectState from "./selectstate";

export default function ShipDelivery({ inputForm, onFormChange }) {
  const stateArr = ["Nigeria", "United States"];
  const [isBool, setIsBool] = React.useState(false);

  return (
    <div className="form">
      <SelectCountry inputForm={inputForm} onFormChange={onFormChange} />
      
      <label htmlFor="" className="label-flex">
      <input
        type="text"
        name="firstName"
        required
        placeholder="First name"
        value={inputForm.firstName}
        onChange={onFormChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        value={inputForm.lastName}
        onChange={onFormChange}
      />

      </label>
  
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={inputForm.address}
        onChange={onFormChange}
      />

      {isBool ? (
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optinnal)"
          name="apartment"
          value={inputForm.apartment}
          onChange={onFormChange}
        />
      ) : (
        <p style={{margin:'.5em 0',cursor:'pointer'}} onClick={()=>setIsBool(true)}>+ Add apartment, suite, etc.</p>
      )}

      <label htmlFor="" className="label-flex">
      <input
        type="text"
        name="city"
        placeholder="City"
        value={inputForm.city}
        onChange={onFormChange}
      />

      {stateArr.includes(inputForm.country) && (
        <SelectState inputForm={inputForm} onFormChange={onFormChange} />
      )}
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={inputForm.postalCode}
        onChange={onFormChange}
      />
      </label>

      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        value={inputForm.phone}
        onChange={onFormChange}
      />
      <input
        type="checkbox"
        id="next"
        name="isChecked"
        onChange={onFormChange}
      />
      <label htmlFor="next">Save this informatino for next time</label>

      <section>
        <h3>Shipping Method</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.
        </p>
      </section>
    </div>
  );
}
