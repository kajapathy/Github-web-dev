/*import React from 'react';
import Header from "../component/Header";
import Meew from '../component/neew';

export default function Homepage() {
  return (
    <div>
      <Header />
      <Meew />
    </div>
  );
}*/

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [contentVisible, setContentVisible] = useState(false);

  const scrollToContent = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    setContentVisible(true); // Show the content section

    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <Link to="/" onClick={scrollToContent}>
        Go to Content Section
      </Link>
      
      
      {contentVisible && (
        <div id="content-section">
          <h2>Content Section</h2>
          <p>This is the content you want to navigate to.</p>
        </div>
      )}
    </div>
  );
};

export default Home;*/
// src/components/Home.js




import React, { useRef, useEffect } from 'react';
import './Home.css';
import Courses from './Courses';

const Home = () => {
  const coursesRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetStartedClick = () => {
    coursesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="home-container">
        <div id="top" />
        <div className="container">
          <h1 className="heading">Welcome to EDUFORD</h1>
          <h4 className="subheading">Your very own personal tutorial corner</h4>
          <p className="paragraph">
            We are passionate about providing high-quality learning resources to empower students and learners worldwide. Whether you're a beginner or an advanced learner, our courses cover a wide range of topics, including programming, mathematics, science, and more.
          </p>
          <p className="paragraph">
            Join us on this exciting journey of knowledge and growth!
          </p>
          <p className="paragraph">
            At EDUFORD, we believe that education is the key to unlocking one's potential. Our mission is to make learning accessible, engaging, and effective for everyone. Explore our extensive library of courses, participate in interactive sessions, and connect with a community of learners and educators.
          </p>
          <p className="paragraph">
            Our experienced instructors are dedicated to providing the best learning experience, with a focus on practical skills and real-world applications. From coding bootcamps to advanced scientific theories, we have something for everyone.
          </p>
          <button className="button" onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>
      <div id="courses-section" ref={coursesRef}>
        <Courses />
      </div>
    </div>
  );
};

export default Home;


