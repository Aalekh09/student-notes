import React from 'react';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const getFileIcon = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('excel') || lower.includes('spreadsheet')) return '📊';
  if (lower.includes('word') || lower.includes('document')) return '📄';
  if (lower.includes('powerpoint') || lower.includes('presentation')) return '📽️';
  if (lower.includes('pdf')) return '📕';
  if (lower.includes('java') || lower.includes('python') || lower.includes('programming')) return '💻';
  if (lower.includes('html') || lower.includes('web')) return '🌐';
  if (lower.includes('autocad') || lower.includes('drawing')) return '📐';
  if (lower.includes('shortcut') || lower.includes('key')) return '⌨️';
  return '📚';
};

const NotesList = ({ notes, onDownload, course, user, onBack }) => {
  return (
    <div className="notes-list">
      <div className="page-header">
        <div className="header-nav">
          <button className="back-button" onClick={onBack}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
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
      </div>

      <div className="notes-content">
        <div className="section-header">
          <h2 className="section-title">{course} Materials</h2>
          <p className="section-subtitle">{notes.length} study materials available for download</p>
        </div>

        <div className="notes-grid">
          {notes.map((note, index) => (
            <div
              key={note.title}
              className="note-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="note-header">
                <div className="note-icon">
                  {getFileIcon(note.title)}
                </div>
                <div className="note-info">
                  <h3 className="note-title">{note.title}</h3>
                  <p className="note-type">Study Material</p>
                </div>
              </div>

              <button
                className="download-button"
                onClick={() => onDownload(note)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v10M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesList; 