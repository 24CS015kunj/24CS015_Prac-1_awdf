import React from 'react';

function Header({ name, title }) {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h1 className="site-title">{title || "Student Portfolio"}</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.2rem' }}>
            CSE Undergrad {name}
          </p>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
