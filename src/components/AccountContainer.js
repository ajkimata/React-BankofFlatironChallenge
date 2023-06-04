import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [sortedTransactions, setSortedTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((resp) => resp.json())
      .then((data) => {
        setTransactions(data);
      });
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function handleSort(attribute) {
    setSortOption(attribute);
  }

  useEffect(() => {
    const sortTransactions = () => {
      const sortedCopy = [...transactions];

      if (sortOption === "date") {
        sortedCopy.sort((a, b) => a.date.localeCompare(b.date));
      } else if (sortOption === "description") {
        sortedCopy.sort((a, b) => a.description.localeCompare(b.description));
      } else if (sortOption === "category") {
        sortedCopy.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortOption === "amount") {
        sortedCopy.sort((a, b) => a.amount - b.amount);
      }

      setSortedTransactions(sortedCopy);
    };

    sortTransactions();
  }, [sortOption, transactions]);

  function deleteTransaction(id) {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedTransactions = transactions.filter(
          (transaction) => transaction.id !== id
        );
        setTransactions(updatedTransactions);
      });
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList
        transactions={sortedTransactions}
        deleteTransaction={deleteTransaction}
        handleSort={handleSort}
      />
    </div>
  );
}

export default AccountContainer;
