AI Chat Interface - Senior React Developer Challenge 🚀
A modern AI-powered chat interface built using React, TypeScript, Zustand, and OpenAI API. This project supports real-time messaging, speech recognition, theme switching, quick replies, and Docker deployment.

🔗 GitHub Repo: https://github.com/yogitasingla93/chatbot
🐳 Docker Hub Image: https://hub.docker.com/r/yogitasingla/my-chatbot

📌 Features
✔️ Real-time messaging with AI-generated responses
✔️ Speech-to-text input via browser's speech recognition API
✔️ Theme switching (Light & Dark mode)
✔️ Quick reply suggestions
✔️ Settings panel for customization
✔️ Loading states & error handling
✔️ Fully Dockerized for easy deployment

📂 Project Structure
bash
Copy
Edit
📂 chatbot
├── src/
│   ├── components/  # UI Components (ChatMessage, ChatInput, Header, SettingsPanel)
│   ├── store/       # Zustand state management
│   ├── services/    # AI API integration
│   ├── types/       # TypeScript type definitions
├── Dockerfile       # Docker build configuration
├── docker-compose.yml  # Docker Compose setup
└── README.md        # Documentation & setup instructions
🛠 Tech Stack
Frontend: React (Vite), TypeScript, Zustand, TailwindCSS
AI Integration: OpenAI API (ChatGPT)
Speech Recognition: Browser API
State Management: Zustand
Deployment: Docker
🚀 Installation & Setup
🔹 Option 1: Run Locally
sh
Copy
Edit
git clone https://github.com/yogitasingla93/chatbot.git
cd chatbot
npm install
npm run dev
🔗 Open http://localhost:4173 in your browser.

🐳 Option 2: Run with Docker
sh
Copy
Edit
docker pull yogitasingla/my-chatbot
docker run -p 4173:4173 yogitasingla/my-chatbot
🔗 Open http://localhost:4173 in your browser.

📦 Option 3: Run with Docker Compose
sh
Copy
Edit
docker-compose up --build
🔗 Open http://localhost:4173 in your browser.

⚙️ Implementation Details
✅ React with TypeScript for type safety & scalability
✅ Zustand for state management (lightweight & efficient)
✅ OpenAI API for AI-generated responses
✅ Browser API for Speech Recognition
✅ TailwindCSS for a clean & responsive UI
✅ Docker for easy deployment & scaling

🧪 Testing Approach
Unit Tests for components using Jest & React Testing Library
Integration Tests for API & state management
Manual Testing for UI responsiveness and performance
🎯 Deployment (Optional)
This project can be deployed on:

AWS (ECS, Elastic Beanstalk, EC2, Lightsail)
GCP (Cloud Run, Compute Engine)
DigitalOcean, Linode, or any VPS with Docker
🔗 Submission Links
GitHub Repo: https://github.com/yogitasingla93/chatbot
Docker Image: https://hub.docker.com/r/yogitasingla/my-chatbot
📜 License
This project is for the Senior React Developer Technical Challenge and is intended for evaluation purposes.

