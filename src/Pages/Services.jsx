import React, { useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const cardData = [
    { title: "Awesome tech 🧙‍♂️", text: "Lorem ipsum dolor sit amet..." },
    { title: "Animation 💥", text: "Lorem ipsum dolor sit amet..." },
    { title: "Crazy stuff 🚀", text: "Lorem ipsum dolor sit amet..." },
    { title: "Pretty card 🧾", text: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <section>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card ${activeIndex === index ? "active" : ""} ${
            activeIndex !== null && activeIndex !== index ? "is-inactive" : ""
          }`}
          onClick={() => handleCardClick(index)}
        >
          <h1>{card.title}</h1>
          <p>{card.text}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
