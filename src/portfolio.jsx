// Portfolio.jsx – Professional Portfolio with Icons for Tools and Sections
import React from "react";
import "./portfolio.css";
import {
  FaPaperPlane,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAndroid,
  FaGitAlt,
  FaCuttlefish,
  FaJava,
  FaPython,
  FaEthereum
} from "react-icons/fa";

import { useEffect, useRef } from "react";


const Portfolio = () => {

  const canvasRef = useRef(null);

useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;

 let particles = Array.from({ length: 100 }).map(() => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
}));


  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      // Normal movement
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Only pull if close to mouse
      const dxMouse = mouseX - p.x;
      const dyMouse = mouseY - p.y;
      const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

      if (distMouse < 150) { // attraction radius
        p.x += dxMouse * 0.01; // attraction speed
        p.y += dyMouse * 0.01;
      }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#00ffe5";
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);




  return (
    
    <div className="portfolio dark-mode">
      
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Portfolio.</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

     {/* Hero Section */}
{/* Hero Section */}
<section className="hero" id="hero">
  <h2>Hi, I'm Amir Faishal</h2>
  <p>
    Code meets impact — building smart apps & modern web with ML, logic, and creativity
  </p>

  {/* Chat with Me Button */}
  <button 
    className="chat-gradient-btn"
    onClick={() => window.open('https://your-chatbot-url.onrender.com', '_blank')}
  >
    💬 Chat with Me
  </button>

  <canvas ref={canvasRef} className="constellation-canvas"></canvas>
</section>



      {/* About Section */}
     <section className="about" id="about">
  <h2>About Me</h2>
  <p className="about-intro">
    I'm a Computer Science undergrad at the Government College of Engineering, Kalahandi. I’m passionate about building impactful software — from full-stack web apps to smart contracts and machine learning solutions.
  </p>

  <p className="about-intro">
    My strength lies in solving real-world problems through clean code, thoughtful design, and continuous learning.
  </p>

  <h3>Education</h3>
  <div className="edu-box">
    <p><strong>🎓 Government College of Engineering, Kalahandi</strong></p>
    <p>B.Tech in Computer Science & Engineering (2022 – 2026)</p>
    <p><strong>CGPA:</strong> 8.62</p>
    <p><strong>Relevant Courses:</strong> Data Structures, Algorithms, Machine Learning, DBMS</p>
  </div>
</section>


      {/* Experience Section */}
     <section className="experience" id="experience">
  <h2>Experience</h2>

  <div className="job-card">
    <h3 className="job-title">Backend & Blockchain Developer – <span>Debadarsan Consultancy Pvt Ltd</span></h3>
    <p className="job-duration">June 2025 – July 2025</p>
    <ul className="job-tasks">
     <li><FaNodeJs className="icon node" /> Developed backend services with Node.js & Express.</li>
<li><FaEthereum className="icon eth" /> Deployed smart contracts on Ethereum & Polygon.</li>
<li><FaDatabase className="icon db" /> Used MongoDB and PostgreSQL for data handling.</li>

    </ul>
  </div>

  <div className="job-card">
    <h3 className="job-title">React Developer Intern – <span>Webdzen Technologies</span></h3>
    <p className="job-duration">July 2025 – Sep 2025</p>
    <ul className="job-tasks">
     <li><FaReact className="icon react" /> Built a task manager with React.js and component-based design.</li>
<li><FaDatabase className="icon firebase" /> Integrated Firebase for data, auth, and hosting.</li>

      <li>Enhanced UI features & handled API connections.</li>
    </ul>
  </div>

<h3 className="tools-title">Tools & Technologies</h3>
<div className="tech-grid">
  <div className="tech-card"><FaHtml5 className="tech-icon html" title="HTML5" /></div>
  <div className="tech-card"><FaCss3Alt className="tech-icon css" title="CSS3" /></div>
  <div className="tech-card"><FaJs className="tech-icon js" title="JavaScript" /></div>
  <div className="tech-card"><FaReact className="tech-icon react" title="React.js" /></div>
  <div className="tech-card"><FaNodeJs className="tech-icon node" title="Node.js" /></div>
  <div className="tech-card"><FaAndroid className="tech-icon android" title="Android" /></div>
  <div className="tech-card"><FaDatabase className="tech-icon db" title="MongoDB / Firebase / SQL" /></div>
  <div className="tech-card"><FaGitAlt className="tech-icon git" title="Git" /></div>
  <div className="tech-card"><FaJava className="tech-icon java" title="Java" /></div>
  <div className="tech-card"><FaPython className="tech-icon python" title="Python" /></div>
  <div className="tech-card"><FaCuttlefish className="tech-icon c" title="C Language" /></div>
  <div className="tech-card"><FaEthereum className="tech-icon eth" title="Solidity / Smart Contracts" /></div>
</div>

</section>

<section className="projects" id="projects">
  <h2 className="projects-title">Projects</h2>
  <div className="projects-grid">
    {[
      {
        title: "Blockchain-based Smart Contracts",
        desc: "Deployed smart contracts on Ethereum & Polygon with backend integration using Node.js & Express.",
        tech: ["Ethereum", "Polygon", "Node.js", "Express", "MongoDB"]
      },
      {
        title: "Task Management Web App",
        desc: "Built a real-time task tracker with React.js & Firebase for storage, auth, and hosting.",
        tech: ["React.js", "Firebase"]
      },
      {
  title: "College Digital Notice Board App",
  desc: "A modern mobile app that digitizes college announcements, enabling instant updates, media sharing, and secure access for students and faculty using Android Studio, Firebase, and Cloudinary.",
  tech: ["Java", "Android Studio", "Firebase", "Cloudinary"]
}
,
      {
        title: "Full-Stack Web Application",
        desc: "Developed a MERN stack web platform with responsive UI portfolio",
        tech: [  "React", "vite","Render"]
      }
    ].map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech">{t}</span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Contact Section */}
     <section className="contact-section" id="contact">
  <h2 className="contact-title">Contact Me</h2>
  <p className="contact-subtext">Feel free to reach out via email, phone, or social links below:</p>
  
  <div className="contact-links">
    <div className="contact-card"><FaEnvelope className="contact-icon" /> amirfaishal484@gcekbpatna.ac.in</div>
    <div className="contact-card"><FaPhone className="contact-icon" /> +91 6372440443</div>
    <div className="contact-card"><FaGithub className="contact-icon" /> github.com/amir484</div>
    <div> <a 
  href="https://www.linkedin.com/in/amir-faishal-a61863269/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="contact-card"
>
  <FaLinkedin className="contact-icon" /> linkedin.com/in/amirfaishal
</a>
</div>
  </div>
</section>



      <footer className="footer">
        <p>&copy; 2025 Amir Faishal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;