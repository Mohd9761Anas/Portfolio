import React, { useState, useEffect, forwardRef } from "react";
const About = forwardRef((props,ref) => {
  const texts = ["a Web Developer", "an Undergraduate Student"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const fullText = texts[index];

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setCurrentText(fullText.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex(charIndex + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);
  return (
    <div className="about" ref={ref}>
      <div className="about-heading">About me</div>
      <div className="about-content">
      <div className="about-intro">I'm Mohd Anas and I'm {currentText} </div>
      <div className="about-text">
        I am an undergraduate student at Aligarh Muslim University, currently in
        my final year. I am also a web developer. Feel free to explore my
        projects below and connect with me!
      </div>
      </div>
    </div>
  );
});
export default About;
