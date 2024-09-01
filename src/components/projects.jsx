import React ,{forwardRef} from "react";
const Project=forwardRef((props,ref)=>{
    return(
        <div className="project" ref={ref}>
            <div className="project-heading heading">My Projects</div>
            <div className="project-box">
                <div className="box1 box">
                    <div className="box-heading">Algorithm Visualizer</div>
                    <div className="box-text"> Algorithm Visualizer is a web application designed to visually demonstrate the inner workings 
of various algorithms. It provides an interactive and educational platform for users to see how 
different algorithms function step-by-step, making complex concepts easier to understand.</div>
                </div>
                <div className="box2 box">
                <div className="box-heading">EduPortal</div>
                <div className="box-text">A student-teacher portal that connects students and teachers. In this portal, students can 
view their personal details and registered courses, while teachers have the ability to assign 
courses.
</div>
                </div>
                <div className="box3 box">
                <div className="box-heading">Guest House Postal</div>
                <div className="box-text">I developed a guest house booking portal during my summer training at ONGC, allowing users to book, update, and check room availability, with an admin interface for comprehensive management.</div>
                </div>
            </div>
        </div>
    )
});
export default Project;