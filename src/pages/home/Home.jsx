import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="star-wars-home">
      <Header />
      <div className="content">
        <h1>Welcome to Star Wars</h1>
        <p>Explore the universe of Star Wars and discover all the information you need to know about your favorite characters, naves espaciales, planetas, etc.</p>
        <br></br>
        <br/>
        <p>A website created with React to learn about this JavaScript framework and as a work of the Markup Languages subject. Explore the universe of Star Wars and discover all you need to know about your characters, spaceships, planets, etc.</p>
        <div className="links">
          <ul>
            <li>
              <a href="/Privacity">Privacity</a>
            </li>
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;