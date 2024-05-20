import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import page1 from "../../assets/menu/page1.jpg";
import page2 from "../../assets/menu/page2.jpg";
import page3 from "../../assets/menu/page3.jpg";
import page4 from "../../assets/menu/page4.jpg";
import page5 from "../../assets/menu/page5.jpg";
import page6 from "../../assets/menu/page6.jpg";
import page7 from "../../assets/menu/page7.jpg";
import page8 from "../../assets/menu/page8.jpg";
import page9 from "../../assets/menu/page9.jpg";
import page10 from "../../assets/menu/page10.jpg";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  minHeight: "800px",
};
const slideImages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
];

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="tumbnail">
      {arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          //   width="300px"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? "active" : ""}
        />
      ))}
    </div>
  );
};

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

const DummyMenu = () => {
  return (
    <div className="slide-container">
      <Slideshow imgs={slideImages} />
    </div>
  );
};

export default DummyMenu;
