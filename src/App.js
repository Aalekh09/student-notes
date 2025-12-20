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
      { title: 'Basic Accounting Technique', url: 'https://drive.google.com/file/d/1sLjIoPd14u5zln6kUO02rGqkJCSrq_8E/view?usp=drive_link' },
      { title: 'Internet in Computers', url: 'https://drive.google.com/file/d/1sFj6pyVsWktxkpZWCD5Yk3HNQ6EMsXvt/view?usp=sharing' },
      { title: 'MS Word', url: 'https://drive.google.com/file/d/1JZzD94y9CxRD4O0KC_YOnMYVLuLgEhdV/view?usp=drive_link' },
      { title: 'MS Access', url: 'https://drive.google.com/file/d/1eJmEhtqiSFs6Imb1ECi-B_8znEHiL2EX/view?usp=drive_link' },
      { title: 'MS Excel', url: 'https://docs.google.com/document/d/1axvdde_Yz7_6TsfUBFdOdwgAnp21SF3x/edit?usp=sharing&ouid=112683413945581529167&rtpof=true&sd=true' },
      { title: 'PowerPoint', url: 'https://drive.google.com/file/d/1jw4Sd9e2eOMRfMdSoTkUR_UHXomcF440/view?usp=drive_link' },
    ],
  },
  {
    name: 'Programming',
    notes: [
      { title: 'Java Notes', url: 'https://drive.google.com/file/d/1Sywx3jQFqVm0Dzv3GCGS3NxUl2ymufGV/view?usp=sharing' },
      { title: 'C Notes', url: 'https://drive.google.com/file/d/1I_MduTI2BfeL_biOQKB2EW4OG_ub_n_l/view?usp=drive_link' },
      { title: 'DSA Notes', url: 'https://drive.google.com/file/d/1kpQkeSdksKvyeqbuGz2lUR0sI2jQwoHq/view?usp=drive_link' },
      { title: 'Pyhton Notes', url: 'https://drive.google.com/file/d/1JOMUhLh8z_6PPjTw8zBNzGMygRSt9X65/view?usp=drive_link' },
      { title: 'HTML Notes', url: 'https://drive.google.com/file/d/1vDxMasRz0i7Fd6w8Y_B9m2PrTlNtyjCx/view?usp=drive_link' },
    ],
  },
  {
    name: 'Shortcut Keys',
    notes: [
      { title: 'Ms Excel Shortcuts', url: 'https://drive.google.com/file/d/126BFEzPnkwMe7dO33uFfsUtX-4aXE5te/view?usp=sharing' },
      { title: 'Tally Prime Shortcuts', url: 'https://drive.google.com/file/d/1bbofTenHWFBwyu4ZTtjdjzRS8OZ5F-CM/view?usp=sharing' },
    ],
  },
  {
    name: 'Assignments',
    notes: [
      { title: 'Ms Excel 1', url: 'https://drive.google.com/file/d/19qD8vSMOtaRV2ni4EhiD3nkvu10u2FNy/view?usp=sharing' },
      { title: 'Ms Excel 2', url: 'https://drive.google.com/file/d/1Kp6OLgTm2ViPAYOALqnCTmR1aeDUwfqi/view?usp=sharing' },
      { title: 'Ms Word ', url: 'https://drive.google.com/file/d/14rNML2eXAbxSvN6hP2Wo1MEd6myN_eac/view?usp=sharing' },
    ],
  },
  {
    name: 'Drawings',
    notes: [
      { title: 'AutoCad Drawings', url: 'https://drive.google.com/file/d/199DEkoDjvEaZLUIr7yonhCMFQlOHpzmb/view?usp=sharing' },
    ],
  },
  {
    name: 'Computer Notes 2025-2026',
    notes: [
      { title: 'Fundamental of Computer', url: 'https://drive.google.com/file/d/1aET37ZSUQYxt4A2KXR5FcruXTHtuFqhK/view?usp=sharing' },
      { title: 'MS Word', url: 'https://drive.google.com/file/d/16qG7TroueEkpye7uDSHzgfEFhYVp7sjj/view?usp=sharing' },
      { title: 'Combine Fundamantal and MS Word', url: 'https://drive.google.com/file/d/13wWoomN2pm7XkJa0FVbZ4xxfe4JGw3OR/view?usp=sharing' },
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
