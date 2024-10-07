import { Worker } from '@react-pdf-viewer/core';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import SignInPage from './pages/SignIn';
import LoginPage from './pages/SignUp';

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>You can reach us via email at faidhi@dummy.com.</p>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      />
      <Router>
        <div className="flex items-center justify-center min-h-screen">
          {/* Define the Routes */}
          <Routes>
            <Route path="/signup" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
