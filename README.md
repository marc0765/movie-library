🎬 **CineFlix – Movie Library Application**  <br>
A sleek, responsive web application for discovering, searching, and managing your favorite movies.
CineFlix allows users to browse movie details, add titles to their watchlist, and view curated collections — all in a modern, easy-to-use interface built with React.

🚀 **Features** <br>
🔍 Search Movies – Find movies by title using live search.
⭐ Watchlist Management – Add or remove movies to/from your personal watchlist.
🎨 Responsive Design – Optimized for mobile, tablet, and desktop.
⚡ Fast Performance – Powered by React and context-based state management.
🧭 Smooth Navigation – Seamless routing using react-router-dom.

🛠️ **Tech Stack**
Frontend: React, JavaScript, CSS
Routing: React Router DOM
State Management: React Context API
API: (e.g., TMDB or custom movie dataset)
Build Tool: Vite / Create React App

💻 **Setup Instructions**
Follow these steps to set up and run the project locally:
1️⃣ Clone the Repository
git clone https://github.com/your-username/movie-library.git
cd movie-library

2️⃣ Install Dependencies
Make sure you have Node.js (v16+) installed, then run:
npm install

3️⃣ Set Up Environment Variables
The project uses an API (TMDB), visit the website and generate an API key and then create a .env file in the root directory:
VITE_TMDB_API_KEY=your_api_key_here

4️⃣ Start the Development Server
npm run dev
Now visit 👉 http://localhost:5173/
(or the URL shown in your terminal).

⚙️ **Design Choices & Assumptions**
Context API is used for global state management (e.g., watchlist data).
React Router DOM handles navigation between pages (Home, Watchlist, Movie Details).
Movie data is fetched dynamically via API calls (assumed from TMDB or similar).
Minimalistic UI/UX with focus on clean layout and ease of interaction.
The watchlist is stored in local storage to persist user preferences.
