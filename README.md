# ✨ SoulScript — AI-Powered Mood-Based Christian Story Generator  

## 🌟 Project Overview  
**SoulScript** is a web application that helps people connect spiritually by generating meaningful, emotion-based stories woven with Bible verses.  
It is designed to inspire hope, faith, and reflection — accessible from anywhere in the world.  

---

## 🚀 Features  
- ✨ Generates unique stories every time based on user mood & Bible verse  
- 📖 Embeds Bible verses naturally into the story  
- 🎨 Clean, responsive frontend built with **React + Tailwind CSS**  
- ⚡ Backend API built with **Express.js**  
- 🔄 Dynamic story generation without needing OpenAI API  

---

## 🛠️ Tech Stack  
- **Frontend:** React.js (Vite), Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Deployment:**  
  - Frontend: [Netlify](https://netlify.com) or [Vercel](https://vercel.com)  
  - Backend: [Render](https://render.com)  

---

## 📝 How It Works  
1️⃣ User enters their mood & a Bible verse  
2️⃣ Frontend sends data to backend API  
3️⃣ Backend generates a unique story using randomized templates  
4️⃣ Story is displayed beautifully on the frontend  

---

## 💻 How To Run Locally  

### 🔹 Backend Setup  
```bash
cd soulscript-backend
npm install
npm run dev
🔹 Frontend Setup
bash
Copy code
cd soulscript-frontend
npm install
npm run dev
🌍 Deployment Instructions
🔹 Deploy Frontend (Netlify or Vercel)
Connect to GitHub

Build Command: npm run build

Publish Directory: soulscript-frontend/dist


🔥 Sample Input for Testing
json
Copy code
{
  "mood": "lost and hopeless",
  "verse": "Jeremiah 29:11 — 'For I know the plans I have for you,' declares the Lord."
}
👩‍💻 Author
Komal Siddharth
Passionate about building tech that inspires faith & positivity.
