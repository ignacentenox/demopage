import React, { useEffect, useState } from 'react';
import { getPurchases } from '../utils/api';
import './dashboard.css';

const Dashboard = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            const data = await getPurchases();
            setPurchases(data);
        };

        fetchPurchases();
    }, []);

    return (
        <div className="dashboard">
            <h1>Dashboard de Compras</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID de Compra</th>
                        <th>Cliente</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr key={purchase.id}>
                            <td>{purchase.id}</td>
                            <td>{purchase.customerName}</td>
                            <td>{purchase.productName}</td>
                            <td>{purchase.quantity}</td>
                            <td>{new Date(purchase.date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;