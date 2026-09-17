import React from 'react';

export default function KpiCards() {
    return (
        <div style={styles.grid}>
            {/* Tarjeta 1: Envíos por Hora */}
            <div style={styles.card}>
                <div style={styles.cardHeader}>
                    <span style={styles.cardTitle}>Envíos por Hora</span>
                    <span style={styles.liveTag}>🟢 Real-time</span>
                </div>
                <div style={styles.chartContainer}>
                    {/* Gráfico de línea simulado con SVG */}
                    <svg viewBox="0 0 300 80" style={styles.svgLine}>
                        <path d="M 0 50 Q 50 20 100 45 T 200 30 T 300 10" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                    </svg>
                </div>
            </div>

            {/* Tarjeta 2: Lead Time Promedio */}
            <div style={styles.card}>
                <span style={styles.cardTitle}>Lead Time Promedio ⓘ</span>
                <div style={styles.metricContent}>
                    <div style={styles.gaugeMock}>
                        <span style={styles.gaugeValue}>39 m</span>
                    </div>
                </div>
            </div>

            {/* Tarjeta 3: Capacidad Activa de la Flota */}
            <div style={styles.card}>
                <span style={styles.cardTitle}>Capacidad Activa de la Flota ⓘ</span>
                <div style={styles.metricContent}>
                    <div style={styles.circleProgress}>
                        <span style={styles.circleText}>70%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gap: '20px',
        marginBottom: '24px',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#64748b',
    },
    liveTag: {
        fontSize: '11px',
        backgroundColor: '#f0fdf4',
        color: '#16a34a',
        padding: '2px 8px',
        borderRadius: '12px',
        fontWeight: '500',
    },
    chartContainer: {
        height: '60px',
        marginTop: '10px',
    },
    svgLine: {
        width: '100%',
        height: '100%',
    },
    metricContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
    },
    gaugeMock: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#0f172a',
    },
    gaugeValue: {
        fontSize: '22px',
    },
    circleProgress: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        border: '5px solid #3b82f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#0f172a',
    }
};