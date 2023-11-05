import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {data, onDeleteItem, onPatchedItem} ) {

  const arrayQuestion = data.map((x) => (
    <QuestionItem question={x} onDeleteItem={onDeleteItem} onPatchedItem={onPatchedItem}/>
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{arrayQuestion}</ul>
    </section>
  );

};

export default QuestionList;