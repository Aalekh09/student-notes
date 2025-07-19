import React from 'react';

const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const NotesList = ({ notes, onDownload, course, user, onBack }) => {
  return (
    <div className="notes-list" style={{ maxWidth: 420, margin: '0 auto' }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0 24px 0',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: 24,
      }}>
        <button onClick={onBack} style={{
          background: 'none',
          border: 'none',
          fontSize: 22,
          color: '#1976d2',
          marginRight: 10,
          cursor: 'pointer',
        }}>&larr;</button>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: 18,
          marginRight: 10,
        }}>{getInitials(user.name)}</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>{user.name}</div>
          <div style={{ fontSize: 12, color: '#888' }}>{user.email}</div>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, fontSize: '1.2em', marginBottom: 12, color: '#1976d2', textAlign: 'center' }}>{course} Notes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {notes.map((note) => (
          <div key={note.title} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#f5f8fd',
            borderRadius: 12,
            padding: '16px 18px',
            boxShadow: '0 1px 4px rgba(25, 118, 210, 0.06)',
          }}>
            <span style={{ fontWeight: 500, fontSize: 16 }}>{note.title}</span>
            <button
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(90deg, #1976d2 70%, #42a5f5 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(25, 118, 210, 0.10)',
                transition: 'background 0.2s',
              }}
              onClick={() => onDownload(note)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList; 