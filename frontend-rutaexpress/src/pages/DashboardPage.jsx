import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import KpiCards from '../components/dashboard/KpiCards';
import FlowCard from '../components/dashboard/FlowCard';
import ShipmentTable from '../components/dashboard/ShipmentTable';
import api from '../services/api'; 

export default function DashboardPage() {
    const { instance, accounts, inProgress } = useMsal();
    const activeAccount = accounts[0];
    const [bffStatus, setBffStatus] = useState(null);

    // Prueba de conexión End-to-End con el BFF al montar el Dashboard
    useEffect(() => {
        if (inProgress === InteractionStatus.None && activeAccount) {
            if (!api || typeof api.get !== 'function') {
                console.error("❌ 'api' no está importado correctamente.");
                setBffStatus({ success: false, error: "Error de configuración en api.js" });
                return;
            }

            api.get('/api/v1/test')
                .then(response => {
                    console.log('✅ [E2E SUCCESS] Respuesta del BFF:', response.data);
                    setBffStatus({ success: true, data: response.data });
                })
                .catch(error => {
                    console.error('❌ [E2E ERROR] Fallo al consultar el BFF:', error);
                    setBffStatus({ 
                        success: false, 
                        error: error.response?.data?.message || error.message || 'Error de red / CORS'
                    });
                });
        }
    }, [inProgress, activeAccount]);

    if (inProgress !== InteractionStatus.None) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
                <p>Cargando sesión con Microsoft Entra ID...</p>
            </div>
        );
    }
    
    // Cierre de sesión según la norma de Microsoft Entra ID / DSY1107
    const handleLogout = () => {
        const currentAccount = instance.getActiveAccount() || activeAccount;
        
        instance.logoutRedirect({
            account: currentAccount,
            postLogoutRedirectUri: "/", 
        }).catch(e => console.error("Error al cerrar sesión:", e));
    };

    return (
        <div style={styles.layout}>
            <Sidebar />

            <main style={styles.mainContent}>
                <Topbar userName={activeAccount?.name || activeAccount?.username} onLogout={handleLogout} />

                {bffStatus && (
                    <div style={{
                        padding: '12px 16px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        backgroundColor: bffStatus.success ? '#dcfce7' : '#fee2e2',
                        color: bffStatus.success ? '#166534' : '#991b1b',
                        border: `1px solid ${bffStatus.success ? '#86efac' : '#fca5a5'}`,
                        fontSize: '14px',
                        fontWeight: '500'
                    }}>
                        {bffStatus.success ? (
                            <span>
                                ✅ <strong>Conexión E2E Exitosa:</strong> {bffStatus.data.message} 
                                {bffStatus.data.authenticatedUser?.username && ` (${bffStatus.data.authenticatedUser.username})`}
                            </span>
                        ) : (
                            <span>
                                ❌ <strong>Error E2E:</strong> {bffStatus.error}
                            </span>
                        )}
                    </div>
                )}

                <KpiCards />
                <FlowCard />
                <ShipmentTable />
            </main>
        </div>
    );
}

const styles = {
    layout: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    mainContent: {
        flex: 1,
        marginLeft: '240px',
        padding: '30px',
    }
};
