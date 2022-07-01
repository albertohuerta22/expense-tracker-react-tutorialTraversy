import React, { useState } from 'react';

export const AddTransactions = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div id="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount
            <br />
            (negative - expense, positive -income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
