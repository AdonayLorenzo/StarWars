import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import imagesData from '../../components/images/images.json'; // Corrected import path
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='galleryBG'>
      <div>
        <Header />

        <div className="gallery-container">

          {Array.isArray(imagesData.images) && imagesData.images.map((image, index) => (
            <div className="image-container">
              <img key={index} src={image.path} alt={image.name} />
               <p className='info'>{image.info}</p>
            </div>
          ))}

        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
