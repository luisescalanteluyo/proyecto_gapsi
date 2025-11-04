import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from '../../features/welcome/pages/WelcomePage';
import ProvidersPage from '../../features/providers/pages/ProvidersPage';
import Header from '../../components/Header';

export default function AppRouter() {
  return (
    <BrowserRouter>
   
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/providers" element={<ProvidersPage />} />
      </Routes>
    </BrowserRouter>
  );
}