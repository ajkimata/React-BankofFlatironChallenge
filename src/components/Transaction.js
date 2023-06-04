import React from "react";

function Transaction({ date, description, category, amount, children }) {
  return (
    <tr>
      <td className="ui center aligned">{date}</td>
      <td className="ui center aligned">{description}</td>
      <td className="ui center aligned">{category}</td>
      <td className="ui center aligned">{amount}</td>
      <td className="ui center aligned">{children}</td>
    </tr>
  );
}

export default Transaction;
