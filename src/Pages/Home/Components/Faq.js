import React, { useState } from "react";

const Faq = () => {
  const data = [
  {
    question: "What destinations do you offer?",
    answer:
      "We provide intergalactic journeys to popular destinations like the Moon, Mars, Jupiter’s moons, and beyond. Each trip is curated for safety and adventure.",
  },
  {
    question: "Is space travel safe?",
    answer:
      "Yes! Safety is our top priority. All our spacecraft are equipped with the latest technology, trained crew, and emergency support systems.",
  },
  {
    question: "How can I book a trip?",
    answer:
      "You can easily book your journey through our website. Simply choose your destination, travel dates, and complete the secure checkout process.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer special packages and discounts for families, student groups, and corporate bookings.",
  },
  {
    question: "What should I bring on my space trip?",
    answer:
      "We provide all the essential gear for space travel. You only need to bring personal items, like documents, medications, and of course — your sense of adventure!",
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
