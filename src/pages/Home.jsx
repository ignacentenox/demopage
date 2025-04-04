import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Bienvenido a nuestra tienda</h1>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;