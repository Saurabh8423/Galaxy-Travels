import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "Question 1?",
      answer: "Answer to question 1",
    },
    {
      question: "Question 2?",
      answer: "Answer to question 2",
    },
    {
      question: "Question 3?",
      answer: "Answer to question 1",
    },
    {
      question: "Question 4?",
      answer: "Answer to question 1",
    },
    {
      question: "Question 5?",
      answer: "Answer to question 1",
    },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <>
      <h1 className="heading">FAQs</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i} onClick={() => handleSelect(i)}>
                <div className="question">
                  <h3>{item.question}</h3>
                  <img
                    src={require("../../../assets/up-arrow.png")}
                    alt=""
                    className={selected === i ? "reverse" : ""}
                  />
                </div>

                <div className={selected === i ? "answer show " : "ans"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
