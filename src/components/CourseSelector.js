import React from 'react';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const CourseSelector = ({ courses, onSelect, user }) => {
  return (
    <div className="course-selector" style={{ maxWidth: 420, margin: '0 auto' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0 24px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: 24,
      }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: 20,
          marginRight: 14,
        }}>{getInitials(user.name)}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 16 }}>{user.name}</div>
          <div style={{ fontSize: 13, color: '#888' }}>{user.email}</div>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: '1.3em', marginBottom: 12, color: '#1976d2', textAlign: 'center' }}>Select Your Course</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {courses.map((course) => (
          <button
            key={course.name}
            style={{
              padding: '18px',
              fontSize: '1.1em',
              borderRadius: '14px',
              border: 'none',
              background: 'linear-gradient(90deg, #1976d2 70%, #42a5f5 100%)',
              color: 'white',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)',
              marginBottom: 0,
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onClick={() => onSelect(course.name)}
          >
            {course.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseSelector; 