import React from 'react';

export default function FlowCard() {
    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <span style={styles.title}>Flujo de Trazabilidad en Tiempo Real (Kafka Stream)</span>
                <select style={styles.select}>
                    <option>Filtrar activo</option>
                </select>
            </div>
            
            {/* Simulación visual del diagrama de flujo (Sankey) */}
            <div style={styles.flowDiagram}>
                <div style={styles.statusColumn}>
                    <span style={styles.stateItem}>Creado</span>
                    <span style={styles.stateItem}>Aceptado</span>
                    <span style={styles.stateItem}>En Bodega</span>
                    <span style={styles.stateItem}>En Ruta</span>
                    <span style={styles.stateItem}>Entregado</span>
                </div>
                <div style={styles.streamVisual}>
                    <div style={styles.lineGreen}></div>
                    <div style={styles.lineBlue}></div>
                    <div style={styles.lineOrange}></div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        border: '1px solid #e2e8f0',
        marginBottom: '24px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
    },
    title: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#0f172a',
    },
    select: {
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #cbd5e1',
        fontSize: '12px',
        color: '#475569',
    },
    flowDiagram: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
    },
    statusColumn: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        fontSize: '13px',
        fontWeight: '500',
        color: '#475569',
    },
    streamVisual: {
        flex: 1,
        margin: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    lineGreen: { height: '6px', backgroundColor: '#10b981', borderRadius: '4px', width: '100%' },
    lineBlue: { height: '6px', backgroundColor: '#3b82f6', borderRadius: '4px', width: '80%' },
    lineOrange: { height: '6px', backgroundColor: '#f97316', borderRadius: '4px', width: '90%' },
};