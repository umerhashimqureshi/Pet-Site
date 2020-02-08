import React from "react";
import axios from "axios";
import history from "./History";
import { Link } from "react-router-dom";

const Checkout = props => {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [num, setNum] = React.useState("");
  console.log(props);
  const handleSave = e => {
    alert("Order Saved");
    axios
      .post("http://localhost:4000/saveUser", {
        firstName,
        secondName,
        address,
        email,
        num
      })
      .then(res => {
        console.log(res.data);
        // history.push("/");
      });
  };

  return (
    <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          aria-describedby="firstNameHelpId"
          placeholder="First Name"
          required
        />
        <small id="firstNameHelpId" className="form-text text-muted">
          You entered: {firstName}
        </small>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="secondName"
          id="secondName"
          value={secondName}
          onChange={e => setSecondName(e.target.value)}
          aria-describedby="secondNameHelpId"
          placeholder="Last Name"
          required
        />
        <small id="secondNameHelpId" className="form-text text-muted">
          You entered: {secondName}
        </small>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="address"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          aria-describedby="addressHelpId"
          placeholder="Address"
          required
        />
        <small id="addressHelpId" className="form-text text-muted">
          You entered: {address}
        </small>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-describedby="emailHelpId"
          placeholder="e-mail"
          required
        />
        <small id="emailHelpId" className="form-text text-muted">
          You entered: {email}
        </small>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="num"
          id="num"
          value={num}
          onChange={e => setNum(e.target.value)}
          aria-describedby="numHelpId"
          placeholder="Number"
          required
        />
        <small id="numHelpId" className="form-text text-muted">
          You entered: {num}
        </small>
      </div>

      
      <Link
        to="/"
        className="btn btn-info btn-sm"
        style={{ marginTop: "4%" }}
        onClick={handleSave}
      >
        Submit
      </Link>
    </div>
  );
};

export default Checkout;
