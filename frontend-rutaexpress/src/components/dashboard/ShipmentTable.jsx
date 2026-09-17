import React from 'react';

export default function ShipmentTable({ shipments }) {
    const defaultData = [
        { id: 'RE00123', date: '25/01/2019', status: 'Creado', time: '10:10:53 PM', duration: '12/05/2023', color: '#10b981', bg: '#f0fdf4' },
        { id: 'RE00124', date: '25/01/2019', status: 'Aceptado', time: '10:10:32 PM', duration: '21/05/2023', color: '#3b82f6', bg: '#eff6ff' },
        { id: 'RE00125', date: '25/01/2019', status: 'En Bodega', time: '10:10:32 PM', duration: '16/05/2023', color: '#f59e0b', bg: '#fef3c7' },
        { id: 'RE00126', date: '26/01/2019', status: 'En Ruta', time: '10:10:32 PM', duration: '21/05/2023', color: '#f97316', bg: '#ffedd5' },
        { id: 'RE00127', date: '23/01/2019', status: 'Entregado', time: '10:10:33 PM', duration: '31/05/2023', color: '#10b981', bg: '#f0fdf4' },
    ];

    return (
        <div style={styles.card}>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.thRow}>
                        <th style={styles.th}><input type="checkbox" /></th>
                        <th style={styles.th}>Envíos ↕</th>
                        <th style={styles.th}>Derecho</th>
                        <th style={styles.th}>Estatus</th>
                        <th style={styles.th}>Data de tirada</th>
                        <th style={styles.th}>Duration</th>
                        <th style={styles.th}>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {defaultData.map((item, index) => (
                        <tr key={index} style={styles.tr}>
                            <td style={styles.td}><input type="checkbox" /></td>
                            <td style={styles.tdBold}>RUTAEXPRESS</td>
                            <td style={styles.td}>{item.date}</td>
                            <td style={styles.td}>
                                <span style={{ ...styles.badge, backgroundColor: item.bg, color: item.color }}>
                                    {item.status}
                                </span>
                            </td>
                            <td style={styles.td}>{item.time}</td>
                            <td style={styles.td}>{item.duration}</td>
                            <td style={styles.td}>
                                <button style={styles.actionBtn}>› Línea de Timeline de Auditoría</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        border: '1px solid #e2e8f0',
        overflow: 'hidden',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left',
        fontSize: '13px',
    },
    thRow: {
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        color: '#64748b',
    },
    th: {
        padding: '12px 16px',
        fontWeight: '600',
    },
    tr: {
        borderBottom: '1px solid #f1f5f9',
    },
    td: {
        padding: '12px 16px',
        color: '#334155',
    },
    tdBold: {
        padding: '12px 16px',
        fontWeight: 'bold',
        color: '#0f172a',
    },
    badge: {
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: '600',
    },
    actionBtn: {
        background: 'none',
        border: 'none',
        color: '#2563eb',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '500',
    }
};