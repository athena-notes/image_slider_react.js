import { useState } from "react";
import first from '../assets/slide1.jpg'
import second from '../assets/slide2.jpg'
import third from '../assets/slide3.jpg'

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "65px",
  color: "#dfdfdf",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "65px",
  color: "#dfdfdf",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = ({ currentIndex, slideIndex }) => ({
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "30px",
  justifyContent: "center",
  color: currentIndex === slideIndex ? 'lightblue' : '#580101',
});

const containerStyles = {
  width: "100%",
  height: "525px",
};


const Home = () => {

  const slides = [
    { imagePath: first, title: "Slide 1" },
    { imagePath: second, title: "Slide 2" },
    { imagePath: third, title: "Slide 3" },
  ];
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].imagePath})`,
  };

  return (
    <div style={containerStyles}>
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
      {slides.map((slide, index) => (
    <div
    style={dotStyle({ currentIndex: currentIndex, slideIndex: index })}
    key={index}
    onClick={() => goToSlide(index)}
   >
    ●
   </div>
   ))}
        </div>
      </div>
      <div className="p">
        <h1>SLIDE </h1>
      
      </div>
    </div>
  );
};





export default Home;