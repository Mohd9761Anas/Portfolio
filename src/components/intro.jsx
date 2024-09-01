import React,  { useState, useEffect ,forwardRef} from "react";
const Intro=forwardRef((props,ref)=>{
  const texts = ['a Web Developer', 'an Undergraduate Student'];
  const [currentText, setCurrentText] = useState('');
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

    return(
        <div className="intro" ref={ref}>
          <div className="anas"></div>
          <div className="intro-text">
            <div className="text1">hello, my name is</div>
            <div className="text2">Mohd Anas</div>
            <div className="text3"> And I'm {currentText}</div>
          </div>
        </div>
    );
});
export default Intro;