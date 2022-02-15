import React from "react";
import './gpay.css'
import { Link } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import phone from "../img/smartphone.png";
import bank from "../img/bank.png";
import upi from "../img/barcode.png";
const Home = () => {
  return (
    <div>
      <Row className="bor">
        <Col>
      
          <Link to='/phone'> <img className="img" src={phone} />{" "}</Link>
          <h1 className="text-center text-uppercase">Mobile Transfer</h1>
        </Col>
        <Col>
        <Link to='/bank'> <img className="img" src={bank} />{" "}</Link> 
        <h1 className="text-center text-uppercase">Direct Bank Transfer</h1>
        </Col>
        <Col>
        <Link to='/upi'> <img  className="img" src={upi} /></Link>
        <h1 className="text-center text-uppercase">UPI Transfer</h1>
        </Col>
      </Row>

       <div>

       <Link to='/test'><button className="mainbtn">Transaction History</button></Link>  
       <Link to='/createaccount'><button className="mainbtn1">Create Account</button></Link> 
      </div>
    </div>
  );
};

export default Home;
