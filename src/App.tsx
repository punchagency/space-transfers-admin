import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { OrderDetails } from './pages/OrderDetails';
import { FulfilmentPartners } from './pages/FulfilmentPartners';
import { PartnerDetails } from './pages/PartnerDetails';
import { Earnings } from './pages/Earnings';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/dashboard/orders/:id" element={<OrderDetails />} />
                <Route path="/fulfilment-partners" element={<FulfilmentPartners />} />
                <Route path="/dashboard/fulfilment-partners/:id" element={<PartnerDetails />} />
                <Route path="/earnings" element={<Earnings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/auth" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
