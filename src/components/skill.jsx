import React ,{forwardRef} from "react";


const Skill = forwardRef((props,ref) => {
  return (
    <div className="skill" ref={ref}>
      <div className="skill-heading heading">My Skills</div>
      <div className="skill-set">
        <div className="skill-item">
          <span className="skill-name">C/C++</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-name">Python</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-name">JavaScript</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-name">PostgreSQL</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-name">MongoDB</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '40%' }}></div>
          </div>
        </div>
        <div className="skill-item">
          <span className="skill-name">React</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skill;
