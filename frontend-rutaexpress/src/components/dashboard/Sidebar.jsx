import React from 'react';

export default function Sidebar() {
    return (
        <aside style={styles.sidebar}>
            <div style={styles.logoContainer}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7H17L21 11V17H19C19 15.9 18.1 15 17 15C15.9 15 15 15.9 15 17H9C9 15.9 8.1 15 7 15C5.9 15 5 15.9 5 17H3V7Z" fill="#3b82f6"/>
                </svg>
                <span style={styles.logoText}>RutaExpress</span>
            </div>

            <nav style={styles.nav}>
                <a href="#dashboard" style={{...styles.navItem, ...styles.activeItem}}>📊 Dashboard</a>
                <a href="#shipments" style={styles.navItem}>📦 Shipments</a>
                <a href="#fleet" style={styles.navItem}>🚚 Fleet</a>
                <a href="#reports" style={styles.navItem}>📈 Reports</a>
                <a href="#audit" style={styles.navItem}>📋 Audit</a>
            </nav>

            <div style={styles.footerNav}>
                <a href="#settings" style={styles.navItem}>⚙️ Settings</a>
                <a href="#help" style={styles.navItem}>❓ Help</a>
            </div>
        </aside>
    );
}

const styles = {
    sidebar: {
        width: '240px',
        backgroundColor: '#0f172a',
        color: '#94a3b8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 0',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
    },
    logoContainer: {
        display: 'flex',
        alignItem: 'center',
        gap: '10px',
        padding: '0 20px 20px 20px',
        borderBottom: '1px solid #1e293b',
    },
    logoText: {
        color: '#ffffff',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '20px 10px',
        flex: 1,
    },
    footerNav: {
        padding: '10px',
        borderTop: '1px solid #1e293b',
    },
    navItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        color: '#94a3b8',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '500',
    },
    activeItem: {
        backgroundColor: '#1e293b',
        color: '#ffffff',
    }
};