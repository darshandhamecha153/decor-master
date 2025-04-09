import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductCard from '../Components/ProductCard';
import "../css/Products.css";

const products = [
  { name: 'Lamp', price: '₹5000', image: '/images/Lamp.jpg' },
  { name: 'Vase', price: '₹3000', image: '/images/vase.jpg' },
  { name: 'Chair', price: '₹3500', image: '/images/chair.jpg' },
  { name: 'Table', price: '₹5000', image: '/images/table.jpg' },
  { name: 'Sofa', price: '₹10000', image: '/images/sofa.jpg' },
  { name: 'Bed', price: '₹10000', image: '/images/bed.jpg' },
  { name: 'Cupboard', price: '₹6499', image: '/images/cupboard.jpg' },
  { name: 'Desk', price: '₹3499', image: '/images/desk.jpg' },
  { name: 'Shelf', price: '₹2499', image: '/images/shelf.jpg' },
];

const Products = () => {
  return (
    <>
      <Header />
      <h2>Our Products</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;

