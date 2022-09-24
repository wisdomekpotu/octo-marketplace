import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import dashboard from './pages/dashboard';
import signin from './pages/signin';
import Banner from './components/Banner/Banner';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className='App'>
      <Banner />
      <Header />
      <ProductCard />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
