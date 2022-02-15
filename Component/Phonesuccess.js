import React from "react";
import { Link, Redirect,  } from 'react-router-dom';
import Phone from "./Phone";
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

export default function Phonesuccess(props) {

  let transaction = Math.floor(100000 + Math.random() * 998777900000);
  console.log(transaction);

  return (
    <div className="mybody">
   

      <div className="card">
        <div className="test">
          <h1 className="paid">Paid succesfully</h1>
          <h1 className="amt">amt:{props.mydata.amt}</h1>
          <h1 className="to">TO:{props.mydata.name}</h1>
          <h1 className="trans">Transaction id:{transaction}</h1>
        </div>
        <Link to="/home">
          {' '}
          <button className="close">close</button>
        </Link>
      </div>
      <img className="myimg" src={check} />
    </div>
  );
}
