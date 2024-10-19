import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider';
import HomeLayout from './layout/Home';
import DashboardPage from './pages/Dashboard';
import FoolPage from './pages/Fooled';
import NotFoundPage from './pages/NotFound';
import PolicyCheckerPage from './pages/PolicyChecker';
import PolicyComparisonPage from './pages/PolicyComparison';
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
      <Router>
        <div className="flex items-center justify-center min-h-screen">
          {/* Define the Routes */}
          <Routes>
            <Route path="/signup" element={<LoginPage />} />
            <Route path="/signin" element={<SignInPage />} />
            {/* <Route path="/home" element={<HomePage />} />
            <Route path="/comparison" element={<PolicyComparisonPage />} /> */}
            <Route path="/home" element={<HomeLayout />}>
              <Route index element={<PolicyCheckerPage />} />{' '}
              {/* Default dashboard page */}
              <Route
                path="comparison"
                element={<PolicyComparisonPage />}
              />{' '}
              {/* /dashboard/profile */}
            </Route>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/🤣😂😘💀" element={<FoolPage />} />
            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
