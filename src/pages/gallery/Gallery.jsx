import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import images from '../../components/images/images';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <Header />

            <div className="gallery-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default Gallery;