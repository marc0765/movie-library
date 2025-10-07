🎬 **CineFlix – Movie Library Application**  <br>
A sleek, responsive web application for discovering, searching, and managing your favorite movies. <br>
CineFlix allows users to browse movie details, add titles to their watchlist, and view curated collections — all in a modern, easy-to-use interface built with React.

🚀 **Features** <br>
🔍 Search Movies – Find movies by title using live search. <br>
⭐ Watchlist Management – Add or remove movies to/from your personal watchlist. <br>
🎨 Responsive Design – Optimized for mobile, tablet, and desktop. <br>
⚡ Fast Performance – Powered by React and context-based state management. <br>
🧭 Smooth Navigation – Seamless routing using react-router-dom. <br>

🛠️ **Tech Stack** <br>
Frontend: React, JavaScript, CSS <br>
Routing: React Router DOM <br>
State Management: React Context API <br>
API: (e.g., TMDB or custom movie dataset) <br>
Build Tool: Vite / Create React App <br>

💻 **Setup Instructions** <br>
Follow these steps to set up and run the project locally: <br>
1️⃣ Clone the Repository <br>
git clone https://github.com/marc0765/movie-library.git <br>
cd movie-library <br>

2️⃣ Install Dependencies <br>
Make sure you have Node.js (v16+) installed, then run: <br>
npm install <br>

3️⃣ Set Up Environment Variables <br>
The project uses an API (TMDB), visit the website and generate an API key and then create a .env file in the root directory: <br>
VITE_TMDB_API_KEY=your_api_key_here <br>

4️⃣ Start the Development Server <br>
npm run dev <br>
Now visit 👉 http://localhost:5173/ <br>
(or the URL shown in your terminal). <br>

⚙️ **Design Choices & Assumptions** <br>
Context API is used for global state management (e.g., watchlist data). <br>
React Router DOM handles navigation between pages (Home, Watchlist, Movie Details).<br>
Movie data is fetched dynamically via API calls (assumed from TMDB or similar). <br>
Minimalistic UI/UX with focus on clean layout and ease of interaction. <br>
The watchlist is stored in local storage to persist user preferences. <br>
