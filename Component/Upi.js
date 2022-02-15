import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./gpay.css";
import Upisuccess from "./Upisuccess";
import { TransactionHistory } from "../Context";

import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";

export default function Upi() {
  const { upi } = useContext(TransactionHistory);

  const [upiInput, setUpiInput] = upi;
  console.log("upidata:", upiInput);
  const [userUpi, setUpi] = useState({
    name: "",
    upi: "",
    amt: "",
    date: "",
    show: false,
  });

  const nameHandler = (event) => {
    setUpi((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  const upiHandler = (event) => {
    setUpi((prev) => {
      return { ...prev, upi: event.target.value };
    });
  };

  const amtHandle = (event) => {
    setUpi((prev) => {
      return { ...prev, amt: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userUpi);
    setUpiInput((prev) => ({
      ...prev,
      upihistory: [...prev.upihistory, { ...userUpi, date: new Date() }],
    }));
    if (!userUpi.name) {
      alert("name is emty");
    } else if (!userUpi.upi) {
      alert("number is emty");
    } else if (!userUpi.amt) {
      alert("amt is emty");
    } else
      setUpi((prev) => {
        return { ...prev, show: true };
      });
  };

  return (
    <div>
      <h1 className="upitransfer">UPI Transfer</h1>
      {userUpi.show ? (
        <Upisuccess userdata={userUpi} />
      ) : (
      <Container>
        <Row>
          <Col>
            <form className="phoneform" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Enter The Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={userUpi.name}
                  onChange={nameHandler}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter The UPI</label>
                <input
                  type="tel"
                  class="form-control"
                  minLength="10"
                  maxLength="10"
                  value={userUpi.upi}
                  onChange={upiHandler}
                />
                <div class="form-text">
                  We'll never share your Phone Number with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Enter The Amount To Pay</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={amtHandle}
                  value={userUpi.amt}
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                className="bankbutton"
              >
                Pay Now
              </button>{" "}
              <Link to="/home">
                {" "}
                <button
                  type="submit"
                  class="btn btn-primary"
                  className="dashboard"
                >
                  Return Back
                </button>
              </Link>
            </form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
       )} 
    </div>
  );
}
