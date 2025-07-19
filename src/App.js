import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login';
import CourseSelector from './components/CourseSelector';
import NotesList from './components/NotesList';
import './App.css';

const GOOGLE_CLIENT_ID = '490855944658-8o2luvq0esb23jjln7u4732d7nbjiukn.apps.googleusercontent.com';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSG86rS_5CoQoCLZbk0m9BtV3I8lmxrDQ2IEyu1fR4Lv1hwaynHJ2hEjF1-QwV7aFy/exec';

// Example course and notes data
const courses = [
  {
    name: 'Computer',
    notes: [
      { title: 'Advance Excel', url: 'https://drive.google.com/file/d/1j9G9mOaQJRER61F0aFvtm__URUotLfDV/view?usp=sharing' },
      { title: 'Basic Accounting Technique', url: 'https://docs.google.com/document/d/1gkmV8QZchB5MQs2dXPi1h_5HmGD4YUW8/edit?usp=sharing&ouid=112683413945581529167&rtpof=true&sd=true' },
      { title: 'Internet in Computers', url: 'https://drive.google.com/file/d/1BD8w7oomJBp3qkSccFPS_x-Ea8qqMEr3/view?usp=sharing' },
      { title: 'MS Word', url: 'https://drive.google.com/file/d/1sS63-vwtqTwNMQcvVheR-W5xLQP3NTf5/view?usp=sharing' },
      { title: 'MS Access', url: 'https://drive.google.com/file/d/1xF_dxDJCXsofvsBzTmNPIokpMCiz2Q-w/view?usp=sharing' },
      { title: 'MS Excel', url: 'https://drive.google.com/file/d/1yoIVT_2p7gpT6v88I-IfzUw2J0gU0HzE/view?usp=sharing' },
    ],
  },
  {
    name: 'Programming',
    notes: [
      { title: 'Java Notes', url: 'https://drive.google.com/file/d/1HriOSFDuEsgTDMIiC0GS4SJ0YLuDH0ck/view?usp=sharing' },
    ],
  },
];

function App() {
  const [user, setUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleCourseSelect = (courseName) => {
    setSelectedCourse(courses.find((c) => c.name === courseName));
  };

  const handleDownload = (note) => {
    if (!user || !selectedCourse) return;
    // Log download to Google Sheet
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        course: selectedCourse.name,
        note: note.title,
      }),
    });
    // Download the note
    window.open(note.url, '_blank');
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="App">
        <h1>Student Notes</h1>
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : !selectedCourse ? (
          <CourseSelector courses={courses} onSelect={handleCourseSelect} user={user} />
        ) : (
          <NotesList
            notes={selectedCourse.notes}
            onDownload={handleDownload}
            course={selectedCourse.name}
            user={user}
            onBack={() => setSelectedCourse(null)}
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
