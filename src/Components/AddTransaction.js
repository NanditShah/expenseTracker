import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [balance, SetBalance] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +balance,
    };
    addTransaction(newTransaction);
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={balance}
            onChange={(e) => SetBalance(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
