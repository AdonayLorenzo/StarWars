import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import imagesData from '../../components/images/images.json'; // Corrected import path
import './Gallery.css';

const Gallery = () => {
  return (
    <div>
      <Header />

      <div className="gallery-container">
        {Array.isArray(imagesData.images) && imagesData.images.map((image, index) => (
          <img key={index} src={image.path} alt={image.name} /> // Use relative paths from the public folder
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Gallery;
