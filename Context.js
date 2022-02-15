import React, { createContext, useState } from "react";
const history=[];
const upihistory=[];
const bankhistory=[];
const initial = {history}
const initial1 ={upihistory}
const initial2 ={bankhistory}

export const TransactionHistory = createContext(initial,initial1,initial2);
export const Provider = ({ children }) => {
  const [data, setData] = useState(initial);
  const [myupi, setmyupi] = useState(initial1);
  const [mybank, setmybank] = useState(initial2);

  return (
    <TransactionHistory.Provider
    value={{ phone: [data, setData], upi: [myupi, setmyupi], bank: [mybank, setmybank] }}
    >
      {children}
    </TransactionHistory.Provider>
  );
};
