import React from "react";

function QuestionItem({ question, onDeleteItem, onPatchedItem }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    console.log("I handleDeleteClick amd running")
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then(() =>onDeleteItem(question.id))
  }

  function handleAnswerUpdateClick(e){
    console.log("test")

    // we deconstruct the id from the question
    fetch(`http://localhost:4000/questions/${id}`, {
      method:"PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({"correctIndex": e.target.value}),})
    .then((r) => r.json())
    .then((updatedItem) => onPatchedItem(updatedItem)); // updated state passing up

    // console.log(e.target.value) // crrect index
    // const xx = {id};
    // console.log(xx)
    // onPatchedItem(id, e.target.value)
  }

  // fetch(`http://localhost:4000/items/${item.id}`, {
  //   method: "PATCH",
  //   headers: {"Content-Type": "application/json",},
  //   body: JSON.stringify({isInCart: !item.isInCart,}),
  // })
  //   .then((r) => r.json())
  //   .then((updatedItem) => console.log(updatedItem));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerUpdateClick} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
