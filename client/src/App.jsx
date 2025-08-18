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
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Makes sure user is logged in to access certain pages

function AppContent() {

  // Get pages where navbar should be hidden
  const location = useLocation();
  const authPages = ['/', '/register'];
  const hideNavbar = authPages.includes(location.pathname);
  const signedIn = localStorage.getItem('authToken') !== null;

  return (
    <div className="bg-gradient-to-r from-neutral-800 via-[#6e6352] to-neutral-800">
      <div className="mx-auto max-w-7xl shadow-xl">
        <div className="mx-auto max-w-7xl shadow-xl min-h-screen flex flex-col">
          {hideNavbar ? (
            // On the login/signup page, show the app name where navbar would be
            <div className="shadow-xl flex justify-center items-center lg:h-14 md:h-14 h-16 bg-gradient-to-r from-neutral-900/50 via-[#2b241b]/60 to-neutral-900/60">
              <h1 className="text-white text-4xl amaranth-bold">ShelfLife</h1>
            </div>
          ) : (
            <Navbar />
          )}
          <div className="flex-1">
            <Routes>
              <Route path="*" element={<ProtectedRoute><ErrorPage /></ProtectedRoute>} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/inventory" element={<ProtectedRoute><InventoryPage /></ProtectedRoute>} />
              <Route path="/recipes" element={<ProtectedRoute><RecipesPage /></ProtectedRoute>} />
              <Route path="/stats" element={<ProtectedRoute><StatsPage /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
            </Routes>
            <div className="flex justify-center items-center lg:h-6 md:h-6 h-4 bg-gradient-to-r from-neutral-900/50 via-[#2b241b]/60 to-neutral-900/60 border-t border-neutral-900/10">
              <p className="text-xs text-neutral-400">2025 ShelfLife - linkedin.com/in/drewvanatta - dv243820@ohio.edu</p>
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
