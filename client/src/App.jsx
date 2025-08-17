import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './routes/homePage.jsx';
import LoginPage from './routes/loginPage.jsx';
import RegisterPage from './routes/registerPage.jsx';
import Navbar from './components/Navbar.jsx';
import SettingsPage from './routes/settingsPage.jsx';
import InventoryPage from './routes/inventoryPage.jsx';
import RecipesPage from './routes/recipesPage.jsx';
import StatsPage from './routes/statsPage.jsx';
import ErrorPage from './routes/errorPage.jsx';

function AppContent() {

  // Get pages where navbar should be hidden
  const location = useLocation();
  const authPages = ['/', '/register'];
  const hideNavbar = authPages.includes(location.pathname);

  return (
    <div className="bg-gradient-to-r from-neutral-800 via-[#6e6352] to-neutral-800">
      <div className="mx-auto max-w-7xl shadow-xl">
        <div className="mx-auto max-w-7xl shadow-xl min-h-screen flex flex-col">
          {hideNavbar ? (
            // On the login/signup page, show the app name where navbar would be
            <div className="shadow-xl flex justify-center items-center lg:h-14 md:h-14 h-16 bg-gradient-to-r from-neutral-900/50 via-[#2b241b]/60 to-neutral-900/60">
              <h1 className="text-white text-4xl font-bold">ShelfLife</h1>
            </div>
          ) : (
            <Navbar />
          )}
          <div className="flex-1">
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          <div className="flex justify-center items-center lg:h-6 md:h-6 h-4 bg-gradient-to-r from-neutral-900/50 via-[#2b241b]/60 to-neutral-900/60 border-t border-neutral-900/10">
            {/* Bottom bar content */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
