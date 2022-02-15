import React, { useContext } from "react";
import { TransactionHistory } from "../Context";
const Test = () => {
  const { phone } = useContext(TransactionHistory);
  const { upi } = useContext(TransactionHistory);
  const { bank } = useContext(TransactionHistory);
  // console.log("myupi", myupi);
  console.log("phone", phone);
  console.log("upi", upi);
  console.log("bank", bank);

  return (
    <div>
   

      <div>
        <div>
          {phone[0].history.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>Phone banking</p>
                <p>To-Name: {item.name}</p>
                <p>To-PhoneNumber: {item.phone}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div>
        <div>
          {upi[0].upihistory.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>UPI banking</p>
                <p>To-Name: {item.name}</p>
                <p>UPI-ID: {item.upi}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div>
        <div>
          {bank[0].bankhistory.map((item, index) => {
            return (
              <div className="my_card" key={index}>
                <p>Bank banking</p>
                <p>To-Name: {item.holderName}</p>
                <p>Acc.NO: {item.accNo}</p>
                <p>Branch: {item.branch}</p>
                <p>IFSC: {item.ifsc}</p>
                <p>Amount: {item.amt}</p>
                <p>Date: {item.date.toString().slice(0, 21)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Test;
