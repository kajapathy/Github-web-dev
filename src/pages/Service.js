import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">Our Educational Services</h1>

      <section className="service-section">
        <h2 className="service-subheading">1. Online Courses</h2>
        <p className="service-paragraph">
          Explore our diverse range of online courses in programming, mathematics, science, languages, and more. Whether you're starting your learning journey or looking to advance your skills, our courses are designed to meet your educational needs.
        </p>
      </section>

      <section className="service-section">
        <h2 className="service-subheading">2. Interactive Learning</h2>
        <p className="service-paragraph">
          Engage in interactive learning experiences with live sessions, practical exercises, and hands-on projects. Our interactive approach ensures that you gain practical skills and real-world knowledge.
        </p>
      </section>

      <section className="service-section">
        <h2 className="service-subheading">3. Personalized Learning Paths</h2>
        <p className="service-paragraph">
          Tailor your learning experience with personalized learning paths. Whether you're a beginner or an advanced learner, we provide customized learning tracks to suit your pace and goals.
        </p>
      </section>

      <section className="service-section">
        <h2 className="service-subheading">4. Skill Development Workshops</h2>
        <p className="service-paragraph">
          Participate in skill development workshops focused on specific topics such as coding bootcamps, data analysis, digital marketing, and more. Acquire in-demand skills to boost your career prospects.
        </p>
      </section>

      <section className="service-section">
        <h2 className="service-subheading">5. Expert-Led Seminars</h2>
        <p className="service-paragraph">
          Attend expert-led seminars and webinars covering the latest trends and advancements in various fields. Gain insights from industry professionals and thought leaders.
        </p>
      </section>

      <section className="service-section">
        <h2 className="service-subheading">6. Career Guidance and Support</h2>
        <p className="service-paragraph">
          Receive career guidance and support through counseling sessions, resume workshops, and job placement assistance. We are committed to helping you succeed in your career goals.
        </p>
      </section>

      {/* Button to redirect to HomePage */}
      <div className="service-button-container">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Service;

