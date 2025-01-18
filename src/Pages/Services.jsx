import React, { useRef } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

// Register GSAP Flip plugin
gsap.registerPlugin(Flip);

const ServicesSection = () => {
  const cardsRef = useRef([]); // Store references to card elements

  const handleCardClick = (index) => {
    const state = Flip.getState(cardsRef.current); // Capture the state of cards before the change

    // Update classes directly on DOM (to avoid React delays)
    cardsRef.current.forEach((card, idx) => {
      card.classList.remove("active", "is-inactive");
      if (index === idx) {
        card.classList.add("active");
      } else {
        card.classList.add("is-inactive");
      }
    });

    // Trigger the Flip animation
    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
    });
  };

  const cardData = [
    { title: "Awesome tech 🧙‍♂️", text: "Lorem ipsum dolor sit amet..." },
    { title: "Animation 💥", text: "Lorem ipsum dolor sit amet..." },
    { title: "Crazy stuff 🚀", text: "Lorem ipsum dolor sit amet..." },
    { title: "Pretty card 🧾", text: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <>
      <section>
        <h1 className="text-3xl font-extrabold tracking-wide text-white text-center mt-10">
          Our <span className="text-[#e6c200]">Services</span>
        </h1>
        <div className="services-section relative">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Store reference to the card
              className="card"
              onClick={() => handleCardClick(index)}
            >
              <h1>{card.title}</h1>
              <p>{card.text}</p>
            </div>
          ))}

          <div className="arrow-animation">
            <svg
              width="120"
              height="80"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 70 Q60 10, 110 70"
                stroke="#FFD700"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5"
              />

              <path
                d="M100 60 L110 70 L100 80"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
