import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const IncomeExpenses = ({}) => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0) // filter amounts that are less than 0
    .reduce((acc, item) => (acc += item), 0) // total is 0; add each amount
    .toFixed(2); // round to 2

  const expesne = (
    amounts
      .filter((item) => item < 0) // filter amounts < 0
      .reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2); // sum all then * -1 to get positive amount

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {expesne}
        </p>
      </div>
    </div>
  );
};
