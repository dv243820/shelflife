import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/homePage.jsx';
import LoginPage from './routes/loginPage.jsx';
import Navbar from './components/Navbar.jsx';
import SettingsPage from './routes/settingsPage.jsx';
import InventoryPage from './routes/inventoryPage.jsx';
import RecipesPage from './routes/recipesPage.jsx';
import StatsPage from './routes/statsPage.jsx';

function App() {
  return (
    //<Router> is used to enable routing in the application
    // This allows navigation between different components/pages
    <div className="bg-gray-300 shadow-xl h-screen">
      <div className="mx-auto max-w-7xl shadow-xl bg-gray-500 lg:h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
