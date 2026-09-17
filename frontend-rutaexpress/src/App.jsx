import { useMsal } from '@azure/msal-react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
    const { accounts } = useMsal();

    return (
        <>
            {accounts.length > 0 ? <DashboardPage /> : <LoginPage />}
        </>
    );
}
