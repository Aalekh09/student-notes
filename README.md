# 📚 Student Notes System

A modern, mobile-first web application designed for small educational institutes to provide easy access to course notes and study materials for their students.

## 🌐 Live Demo

**Access the application:** [https://Aalekh09.github.io/student-notes](https://Aalekh09.github.io/student-notes)

## 📱 Features

### For Students
- **🔐 Secure Google OAuth Login** - Sign in with your school email
- **📖 Course-based Note Organization** - Browse notes by subject/course
- **📱 Mobile-Optimized Design** - Perfect for accessing notes on smartphones
- **🔗 Direct Download Links** - One-click access to Google Drive notes
- **📊 Download Tracking** - Automatic logging of note downloads for analytics

### For Administrators
- **📈 Usage Analytics** - Track which notes are most accessed
- **👥 User Management** - Monitor student engagement
- **📝 Easy Content Management** - Simple note organization system

## 🛠️ Technology Stack

- **Frontend:** React.js
- **Authentication:** Google OAuth 2.0
- **Data Storage:** Google Sheets (via Google Apps Script)
- **Hosting:** GitHub Pages
- **Styling:** CSS3 with responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aalekh09/student-notes.git
   cd student-notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Google OAuth**
   - Create a Google Cloud Project
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Update `GOOGLE_CLIENT_ID` in `src/App.js`

4. **Set up Google Apps Script**
   - Create a new Google Apps Script project
   - Deploy as web app
   - Update `APPS_SCRIPT_URL` in `src/App.js`

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
student-notes/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Login.js          # Google OAuth login component
│   │   ├── CourseSelector.js # Course selection interface
│   │   └── NotesList.js      # Notes display and download
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   └── index.js             # Application entry point
├── package.json
└── README.md
```

## 🎯 Current Courses & Notes

The system currently includes notes for:

- **Computer Applications**
  - Advanced Excel
  - Basic Accounting Techniques
  - Internet in Computers
  - MS Word, Excel, Access, PowerPoint

- **Programming**
  - Java, C, Python
  - Data Structures & Algorithms
  - HTML

- **Shortcut Keys**
  - MS Excel Shortcuts
  - Tally Prime Shortcuts

## 🔧 Configuration

### Environment Variables
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
- `APPS_SCRIPT_URL`: Your Google Apps Script web app URL

### Customization
- Update course data in `src/App.js`
- Modify styling in `src/App.css`
- Add new components in `src/components/`

## 📊 Analytics Integration

The system automatically logs:
- Student name and email
- Course accessed
- Notes downloaded
- Timestamp of activity

Data is stored in Google Sheets for easy analysis.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aalekh** - [GitHub Profile](https://github.com/Aalekh09)

## 🙏 Acknowledgments

- Google OAuth for secure authentication
- React.js community for excellent documentation
- Google Apps Script for backend functionality

## 📞 Support

If you have any questions or need support, please:
- Open an issue on GitHub
- Contact the development team

---

**Made with ❤️ for educational institutions** 
