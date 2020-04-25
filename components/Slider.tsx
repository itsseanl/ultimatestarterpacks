import react, { useState, useEffect } from "react";

const Slider = ({ images }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(slide + 1);
    }, 3000);
    if (slide > images.length - 1) {
      setSlide(0);
    }
    return () => clearInterval(interval);
  }, [slide]);

  function updateImages() {}

  return (
    <>
      <div className="slider">
        {images.map(image => {
          return (
            <div
              className="slide"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
      <style jsx>{`
        .slider {
          height: 50vh;
          width: ${images.length}00vw;
          display: flex;
          flex-wrap: nowrap;
          transform: translateX(-${slide}00vw);
          transition: 0.3s all;
        }
        .slide {
          height: 100%;
          width: 100%;
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </>
  );
};

export default Slider;
