import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import { fetchPurchases } from '../utils/api';

const AdminDashboard = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const getPurchases = async () => {
            const data = await fetchPurchases();
            setPurchases(data);
        };

        getPurchases();
    }, []);

    return (
        <div className="admin-dashboard">
            <h1>Tablero de Administración</h1>
            <Dashboard purchases={purchases} />
        </div>
    );
};

export default AdminDashboard;