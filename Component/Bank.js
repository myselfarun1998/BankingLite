import React, { useState,useContext } from "react";
import "./gpay.css";

import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { Link, Redirect,  } from "react-router-dom";
import Banksuccess from "./Banksuccess";
import {TransactionHistory} from '../Context';

const Bank = () => {

  const {bank} = useContext(TransactionHistory);
  const [bankInput, setBankInput] = bank;
  console.log("bank",bankInput);



  const [accDetails, setAccDetails] = useState({
    holderName: "",
    accNo: "",
    ifsc: "",
    branch: "",
    amt: "",
    show: false,
  });

  const nameHandle = (event) => {
    setAccDetails((prev) => {
      return { ...prev, holderName: event.target.value };
    });
  };
  const accNoHandle = (event) => {
    setAccDetails((prev) => {
      return { ...prev, accNo: event.target.value };
    });
  };

  const ifscHandle = (event) => {
    setAccDetails((prev) => {
      return { ...prev, ifsc: event.target.value };
    });
  };
  const branchHandle = (event) => {
    setAccDetails((prev) => {
      return { ...prev, branch: event.target.value };
    });
  };
  const amtHandle = (event) => {
    setAccDetails((prev) => {
      return { ...prev, amt: event.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
// console.log(accDetails);

setBankInput((prev) => (
  {...prev,
    bankhistory:[...prev.bankhistory,{...accDetails,date:new Date()}]
}
))
    if (!accDetails.holderName) {
      alert("accname is emty");
    } else if (!accDetails.accNo) {
      alert("accnumber is emty");
    } else if (!accDetails.ifsc) {
      alert("ifsc is emty");
    } else if (!accDetails.branch) {
      alert("branch is emty");
    } else if (!accDetails.amt) {
      alert("amt is emty");
    } else {
      setAccDetails((prev) => {
        return { ...prev, show: true };
      });
    }
    setAccDetails((prev) => {
      return { ...prev, show: true };
    });
  };

  return (
    <div>
      <h1 className="banktext">Bank Transfer</h1>
      {accDetails.show ? (
        <Banksuccess bankdata={accDetails} />
      ) : (
      <Container>
        <Row>
          <Col>
            <Form className="phoneform" onSubmit={handleSubmit}>
              <Form.Group controlId="phoneform">
                <Form.Label className="lab">
                  Enter The Account Holder Name
                </Form.Label>
                <Form.Control
                  className="form-control bank_input"
                  type="text"
                  value={accDetails.holderName}
                  onChange={nameHandle}
                  name="holderName"
                />
              </Form.Group>
              <Form.Group controlId="formAccNo">
                <Form.Label className="lab">
                  Enter The Account Number
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  value={accDetails.accNo}
                  onChange={accNoHandle}
                  name="accNo"
                  minLength="10"
                  maxLength="10"
                />
                <div class="form-text">
                  We'll never share your Account Number with anyone else.
                </div>
              </Form.Group>
              <Form.Group controlId="formIfscCode">
                <Form.Label className="lab">Enter The IFSC Code</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  value={accDetails.ifsc}
                  onChange={ifscHandle}
                  name="ifsc"
                />
              </Form.Group>
              <Form.Group controlId="formBranchName">
                <Form.Label className="lab">Enter The Branch Name</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  value={accDetails.branch}
                  onChange={branchHandle}
                  name="branch"
                />
              </Form.Group>
              <Form.Group controlId="formBranchName">
                <Form.Label className="lab">Enter The Amount To Pay</Form.Label>
                <Form.Control
                  className="form-control"
                  type="number"
                  value={accDetails.amt}
                  onChange={amtHandle}
                  name="amt"
                />
              </Form.Group>{" "}
              <Button
                type="submit"
                class="btn btn-primary"
                className="phonebutton"
              >
                {" "}
                Pay Now
              </Button>
              <Link to="/home">
                {" "}
                <Button
                  type="submit"
                  class="btn btn-primary"
                  className="dashboard"
                >
                  {" "}
                  Return Back
                </Button>{" "}
              </Link>
            </Form>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      )} 
    </div>
  );
};

export default Bank;
