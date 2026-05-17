import React, { useEffect, useState } from "react";

// images
import event1 from "../assets/pastevent/event1.jpeg";
import event2 from "../assets/pastevent/event2.jpeg";
import event3 from "../assets/pastevent/event3.jpeg";
import event4 from "../assets/pastevent/event4.jpeg";
import event5 from "../assets/pastevent/event5.jpeg";

const images = [event1, event2, event3, event4, event5];

const PastEvent = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = images.length;

  // RESPONSIVE
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 576) setItemsPerSlide(1);
      else if (window.innerWidth < 992) setItemsPerSlide(2);
      else setItemsPerSlide(4);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // AUTO SLIDE (smooth + infinite)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="container py-5">
      <div className="position-relative overflow-hidden">

        {/* SLIDER TRACK */}
        <div
          className="d-flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
            transition: "transform 0.6s ease-in-out",
            width: `${(total * 100) / itemsPerSlide}%`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                width: `${100 / total}%`,
                padding: "0 10px",
              }}
            >
              <img
                src={img}
                alt={`event-${i}`}
                className="w-100 rounded shadow-sm"
                style={{
                  height: "250px",          // SAME HEIGHT
                  objectFit: "contain",       // CLEAN CROPPING
                  borderRadius: "12px",
                }}
              />
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
          onClick={prevSlide}
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
          onClick={nextSlide}
        >
          ›
        </button>

      </div>
    </section>
  );
};

export default PastEvent;