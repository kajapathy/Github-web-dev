// src/components/Courses.js
import React from 'react';
import './Courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    { id: 1, title: 'HTML Tutorial', description: 'Learn the basics of HTML.' },
    { id: 2, title: 'CSS Tutorial', description: 'Learn how to style websites with CSS.' },
    { id: 3, title: 'JavaScript Tutorial', description: 'Learn the fundamentals of JavaScript.' },
    { id: 4, title: 'Python Tutorial', description: 'Learn Python programming from scratch.' },
    { id: 5, title: 'Java Tutorial', description: 'Learn Java programming.' },
  ];
  
  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            <Link style={{textDecoration:"none"}} to={`https://www.w3schools.com/${course.title.split(' ')[0]}`}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
