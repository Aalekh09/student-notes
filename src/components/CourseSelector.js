import React from 'react';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const courseIcons = {
  'Computer': '💻',
  'Programming': '⚡',
  'Shortcut Keys': '⌨️',
  'Assignments': '📝',
  'Drawings': '📐'
};

const CourseSelector = ({ courses, onSelect, user }) => {
  return (
    <div className="course-selector">
      <div className="page-header">
        <div className="user-profile">
          <div className="user-avatar">
            {getInitials(user.name)}
          </div>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="course-content">
        <div className="section-header">
          <h2 className="section-title">Choose Your Course</h2>
          <p className="section-subtitle">Select a course to access your study materials and notes</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={course.name}
              className="course-card"
              onClick={() => onSelect(course.name)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="course-icon">
                {courseIcons[course.name] || '📚'}
              </div>
              <div className="course-info">
                <h3 className="course-name">{course.name}</h3>
                <p className="course-count">{course.notes.length} materials</p>
              </div>
              <div className="course-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSelector; 