import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import CallOfDutyPage from './pages/CallOfDutyPage';
import PUBGPage from './pages/PUBGPage';
import FreeFirePage from './pages/FreeFirePage';
import RobloxPage from './pages/RobloxPage';
import WarThunderPage from './pages/WarThunderPage';
import PublicDisplay from './pages/PublicDisplay';
import { Layout } from './components/Layout';
import { UserProfile } from './types';
import './styles/WelcomeAnimation.css';
import { UIProvider } from './contexts/UIContext';

function App() {
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(sessionStorage.getItem('welcomeComplete') === 'true');
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

  const handleWelcomeFinish = () => {
    sessionStorage.setItem('welcomeComplete', 'true');
    setIsWelcomeComplete(true);
  };

  const handleSaveProfile = (profile: UserProfile) => {
    setUserProfiles(prevProfiles => [...prevProfiles, profile]);
  };

  const AppLayout = () => (
    <Layout>
      <Outlet />
    </Layout>
  );

  const ProtectedRoutes = () => {
    if (!isWelcomeComplete) {
      return <Navigate to="/" />;
    }
    return <AppLayout />;
  };

  return (
    <UIProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-orange-50 font-sans">
          <Routes>
            <Route 
              path="/" 
              element={!isWelcomeComplete ? <Welcome onFinish={handleWelcomeFinish} /> : <Navigate to="/home" />} 
            />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/call-of-duty" element={<CallOfDutyPage onSaveProfile={handleSaveProfile} />} />
              <Route path="/pubg" element={<PUBGPage onSaveProfile={handleSaveProfile} />} />
              <Route path="/free-fire" element={<FreeFirePage onSaveProfile={handleSaveProfile} />} />
              <Route path="/roblox" element={<RobloxPage onSaveProfile={handleSaveProfile} />} />
              <Route path="/war-thunder" element={<WarThunderPage onSaveProfile={handleSaveProfile} />} />
              <Route path="/public-display" element={<PublicDisplay profiles={userProfiles} />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </UIProvider>
  );
}

export default App;
