import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const student = {
    name: "Kunj Desai",
    title: "Kunj Desai | Portfolio",
    bio: "I am a CSE student specializing in Advanced Web Development Frameworks. I enjoy solving algorithmic problems and developing responsive, modern web applications.",
    skills: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Vite",
      "Git & GitHub",
      "Python",
      "C / C++",
      "Node.js Basics"
    ],
    email: "24cs015@charusat.edu.in",
  };

  return (
    <div className="portfolio-container">

      <Header name={student.name} title={student.title} />

      <main>

        <About studentName={student.name} bio={student.bio} />

        <Skills skillList={student.skills} />
      </main>

      <Footer email={student.email} />
    </div>
  );
}

export default App;
