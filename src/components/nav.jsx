import React from 'react';

const Nav = ({ scrollToContact, scrollToSkill, scrollToHome ,scrollToProject,scrollToAbout }) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#000000' }}>
      <div className="container-fluid">
        <h2 className="navbar-brand" href="#" style={{ color: 'white' }}>Mohd Anas</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={scrollToHome} style={{ color: 'white' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={scrollToAbout} style={{ color: 'white' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={scrollToProject} style={{ color: 'white' }}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={scrollToSkill} style={{ color: 'white' }}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={scrollToContact} style={{ color: 'white' }}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Resume_.pdf" target="_blank" style={{ color: 'white' }}>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
