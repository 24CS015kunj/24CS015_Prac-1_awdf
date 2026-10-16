import React from 'react';

function Skills({ skillList }) {
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <p style={{ color: '#94a3b8' }}>Core technologies and frameworks I work with:</p>
      <ul className="skills-list">
        {skillList.map((skill) => (
          <li key={skill} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
