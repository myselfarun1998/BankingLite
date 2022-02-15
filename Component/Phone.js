import React, { useState ,useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Phonesuccess from './Phonesuccess';
import {TransactionHistory} from '../Context';
import {
  Button,
  Form,
  Container,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";

const  Phone =()=> {

const {phone} = useContext(TransactionHistory);
const [phoneNumber, setphoneNumber] = phone;
console.log("data1",phoneNumber);


// const names = [
//   'Ravi',
//   'Dhanush',
//   'kiran Kumar',
//   'Sathish',
//   'Nayanthara',
//   'Sneha',
//   'Jones ',
//   'Ajith Kumar',
//   'Mani Gandan',
//   'Lokesh raj',
//   'Baba Shankar',
//   'Rosi',
//   'Shilpa'
// ];
// let item = names[Math.floor(Math.random() * names.length)];

  const [phoneInput, setPhoneInput] = useState({
    name: '',
    phone: '',
    amt: '',
    date: '',
    show: false,
  });

 
  const nameHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, name: event.target.value };
    });
  };
  const phoneHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, phone: event.target.value };
    });
  };

  const amtHandle = (event) => {
    setPhoneInput((prev) => {
      return { ...prev, amt: event.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setPhoneInput((prev)=>({...prev,date:new Date()})

    setphoneNumber((prev) => (
      {...prev,
        history:[...prev.history,{...phoneInput,date:new Date()}]
    }
    ))
    if (!phoneInput.name) {
      alert('name is emty');
    } else if (!phoneInput.phone) {
      alert('number is emty');
    } else if (!phoneInput.amt) {
      alert('amt is emty');
    } else  {
    setPhoneInput((prev) => {
        return { ...prev, show: true };
      });

    }

  };

  return (
    <div>
      <h1 className="phonetxt">phone Transfer</h1>

      {phoneInput.show ? (
        <Phonesuccess mydata={phoneInput} />
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
                    value={phoneInput.name}
                    onChange={nameHandle}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter The Phone Number</label>
                  <input
                    type="tel"
                    class="form-control"
                    minLength="10"
                    maxLength="10"
                    value={phoneInput.phone}
                    onChange={phoneHandle}
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
                    value={phoneInput.amt}
                    onChange={amtHandle}
                  />
                </div>
              
                  <button
                    type="submit"
                    class="btn btn-primary"
                    className="bankbutton"
                  >
                    Pay Now
                  </button>{' '}
             
                <Link to="/home">
                  {' '}
                  <button
                    type="submit"
                    class="btn btn-primary"
                    className="dashboard"
                  >
                    Return Back
                  </button>{' '}
                </Link>
              </form>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
        ) } 

      
    </div>
  );
}
export default Phone;