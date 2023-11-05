import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [data, setData] = useState([]);

  useEffect(() => {
    const url_question = 'http://localhost:4000/questions'
    fetch(url_question)
    .then( (res) => res.json())
    .then( (data) => setData(data));
    // .then( (data) => console.log(data));
    // console.log("I ran")
  }, [])

  function handleAddRecord(newRecord) {
    // console.log("Yahoooooo", newRecord);
    const newRecords = [...data, newRecord]
    // console.log(newRecords)
    setData(newRecords)
  }

  function onDeleteItem(deletedItem) {
    // console.log("THIS JUNK RUNNING")
    // console.log(deletedItem)
    const updatedDeleteedItems = data.filter((item) => item.id !== deletedItem); // not ben removed id since passing just id up
    setData(updatedDeleteedItems);
  }

  function onPatchedItem(x) {
    // console.log("THIS JUNK RUNNING")
    console.log(x)
    const updatedData = data.map((item) => {
    if (item.id === x.id) {

      return x;
    } else {
      return item; }
    });

    // const updatedItems = data.filter((item) => item.id !== deletedItem); // not ben removed id since passing just id up
    setData(updatedData);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm handleAddRecord={handleAddRecord} /> :
      <QuestionList data={data} onDeleteItem={onDeleteItem} onPatchedItem={onPatchedItem}/>}
    </main>
  );
}

export default App;

// APP
    // --- AdminNavBar
    // --- QuestionForm
    // --- QuestionList
          // --- QuestionItem
