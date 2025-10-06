import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext';
import Header from './components/Header';
import Home from './views/Home';
import WatchlistView from './views/WatchlistView';

const App: React.FC = () => (
  <BrowserRouter>
    <WatchlistProvider>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchlistView />} />
        </Routes>
      </div>
    </WatchlistProvider>
  </BrowserRouter>
);

export default App;
