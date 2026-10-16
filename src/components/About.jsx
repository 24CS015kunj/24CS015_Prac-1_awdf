import React from 'react';

function About({ studentName, bio }) {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p className="hero-greeting">Hello, I'm</p>
      <h3 className="hero-name">{studentName}</h3>
      <p style={{ color: '#cbd5e1' }}>
        {bio || "I am a Computer Science and Engineering student passionate about full-stack web development, software design, and building clean, user-friendly applications."}
      </p>
    </section>
  );
}

export default About;
