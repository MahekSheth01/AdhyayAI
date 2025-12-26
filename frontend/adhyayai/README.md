# 📘 AdhyayAI – AI-Powered Learning Assistant

AdhyayAI is an AI-powered learning assistant web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), styled with Tailwind CSS, and powered by Google Gemini AI.

It transforms PDFs into interactive study experiences with AI chat, auto-generated summaries, flashcards, quizzes, and progress tracking — all in one place.

---

## 🚀 Features

### 📄 PDF-Based Learning
- Upload PDFs (books, notes, research papers)
- Automatic text extraction and processing
- Organized learning by document and topic

### 🤖 AI Chat Assistant (Google Gemini AI)
- Ask questions directly from uploaded PDFs
- Context-aware answers based on document content
- Natural conversational learning experience

### 📝 Auto-Generated Summaries
- AI-generated summaries from PDF content
- Chapter-wise and document-wise summaries
- Perfect for quick revision

### 🧠 Flashcards
- Automatically generated flashcards from PDFs
- Helps with active recall and memorization
- Interactive and easy to review

### ❓ Quizzes & Self-Assessment
- AI-generated quizzes from study material
- Multiple-choice questions (MCQs)
- Instant scoring and feedback

### 📊 Progress Tracking
- Track learning progress per document
- Quiz performance insights
- Helps users stay consistent and motivated

### 🎨 Modern UI
- Clean and responsive interface
- Built with Tailwind CSS
- Mobile-friendly design

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB
- Mongoose

### AI Integration
- Google Gemini AI
  - AI Chat
  - Summaries
  - Flashcards
  - Quiz Generation

---

## 📂 Project Structure

AdhyayAI/
├── frontend/                 # React frontend  
│   ├── src/  
│   ├── components/  
│   ├── pages/  
│   └── services/  
│  
├── backend/                 # Node.js backend  
│   ├── controllers/  
│   ├── routes/  
│   ├── models/  
│   ├── middleware/  
│   └── utils/  
│  
├── .env  
├── package.json  
└── README.md  

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
GEMINI_API_KEY=your_google_gemini_api_key  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
git clone https://github.com/MahekSheth01/AdhyayAI.git  
cd AdhyayAI  

### 2. Install Backend Dependencies
cd backend  
npm install  

### 3. Install Frontend Dependencies
cd frontend  
npm install  

### 4. Run the Application

Start Backend:
cd backend  
npm run dev  

Start Frontend:
cd frontend  
npm start  

Frontend: http://localhost:3000  
Backend: http://localhost:5000  

---

## 🎯 Use Cases

- Students preparing for exams
- Competitive exam aspirants
- College and university learners
- Self-learners using PDF materials
- AI-powered digital classrooms

---

## 🔮 Future Enhancements

- User authentication (JWT / OAuth)
- Cloud-based PDF storage
- Notes highlighting and bookmarking
- Multi-language support
- Voice-based AI assistant
- Collaborative study rooms

---

## 🤝 Contributing

Contributions are welcome.  
Fork the repository, create a new branch, and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Google Gemini AI
- MongoDB
- React.js
- Tailwind CSS
- Open-source community

---

## 📬 Contact

Project Name: AdhyayAI  
Developer: Mahek
Tech Stack: MERN + AI  

⭐ If you like this project, don’t forget to star the repository!
