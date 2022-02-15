import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./gpay.css";
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import check from "../img/check.png";

const Banksuccess = (props) => {
  let trasId = Math.floor(100000 + Math.random() * 9927789000);

  return (
    <div className="mybody">
      

      <div className="card">
        <div className="test">
          <h1 className="paid">Paid succesfully</h1>
          <h1 className="amt">Amount: {props.bankdata.amt}</h1>
          <h1 className="to">TO:{props.bankdata.holderName}</h1>
          <h1 className="to">Branch:{props.bankdata.branch}</h1>
          <h1 className="to">IFSC:{props.bankdata.ifsc}</h1> 
          <h1 className="to">IFSC:{props.bankdata.ifsc}</h1>
          <h1 className="to">Transaction id:{trasId}</h1>
         
        </div>
        <Link to="/home">
          <button className="close">close</button>
        </Link>
      </div>
      <img className="myimg" src={check} />
    </div>
  );
};

export default Banksuccess;
