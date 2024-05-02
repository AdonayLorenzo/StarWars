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
        <br />
        <p>A website created with React to learn about this JavaScript framework and as a work of the Markup Languages subject. Explore the universe of Star Wars and discover all you need to know about your characters, spaceships, planets, etc.</p>
        <div className="links">
          <h2>Visit the other Pages</h2>
          <ul>
            <li>
              <a href="/Privacity" className='links'>Privacity</a>
            </li>
            <li>
              <a href="/Data" className='links'>Data</a>
            </li>
            <li>
              <a href="Chat" className='links'>Chat</a>
            </li>
            <li>
              <a href="/Gallery" className='links'>Gallery</a>
            </li>
          </ul>
          <br></br>
          <br></br>
        </div>
        <h2 className='title'>Characters</h2>
        <br />
        <div className="characters">
          <div className="character">
            <h2>Luke Skywalker</h2>
            <p>Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise.</p>
          </div>
          <div className="character">
            <h2>Han Solo</h2>
            <p>Han Solo is a fictional character in the space opera franchise Star Wars.</p>
          </div>
          <div className="character">
            <h2>Princesa Leia</h2>
            <p>Princess Leia Organa is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;