import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../Interets2/data";
import "../Interets2/interets2.css"

export default function Interets2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div>
      <section className={"section-nm"}>
        <div className={"title"}>
          <h2>Centres d'intérêt :</h2>
        </div>
        <div className={"section-center "}>
          {data.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === data.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <img className={"person-img"} src={image} alt={title} />
                <h4>{name}</h4>
                <p className={"title"}>{title}</p>
                <p className={"quote"}>{quote}</p>
                {/* FaQuoteRight is removed if not used */}
              </article>
            );
          })}
          <button className={"prev"} onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className={"next"} onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}
