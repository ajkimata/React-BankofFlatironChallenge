import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, deleteTransaction, handleSort }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("date")}>Sort by Date</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("description")}>Sort by Description</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("category")}>Sort by Category</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("amount")}>Sort by Amount</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          >
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </Transaction>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
