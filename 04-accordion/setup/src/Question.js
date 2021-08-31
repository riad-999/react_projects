import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {info,title} = props
  const [answer,set_answer] = useState(false);
  return <div className="question">
    <header>
      {title}
    </header>
    <button className="btn" onClick={() => {set_answer(!answer)}}>
      {answer ? <AiOutlineMinus /> : <AiOutlinePlus />}
    </button>
    {answer && <p>{info}</p>}
  </div>;
}
export default Question;
