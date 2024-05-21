import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="star-wars-home">
      <Header />
      <div className="content">
        <img className='logo2' src="/imgs/logo2.png" alt="logo" />
        <p>Explore the universe of Star Wars and discover all the information you need to know about your favorite characters, naves espaciales, planetas, etc.</p>
        <br></br>
        <br />
        <p>A website created with React to learn about this JavaScript framework and as a work of the Markup Languages subject. Explore the universe of Star Wars and discover all you need to know about your characters, spaceships, planets, etc.</p>
        <div className="links">
          <h2>Last Films</h2>
            <div className='posters'>
              <a className='poster' href="https://www.disneyplus.com/es-es/movies/star-wars-el-despertar-de-la-fuerza-episodio-vii/1LEKJPDPeMr7">
                <img src="/imgs/home-images/eldespertardelafuerza.jpg" alt="eldespertardelafuerza" />
              </a>
              <a className='poster' href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.disney.es/peliculas/star-wars-los-ultimos-jedi&ved=2ahUKEwjFtIWejZ-GAxUqTKQEHY3KCssQFnoECBUQAQ&usg=AOvVaw3BUUYPEkTNazGF3hkZaa9X">
                <img src="/imgs/home-images/thelastjedi.jpg" alt="thelastjedi" />
              </a>
              <a className='poster' href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.disneyplus.com/es-es/movies/star-wars-el-ascenso-de-skywalker-episodio-ix/5e8JThYwCYgw&ved=2ahUKEwiA2tzfjp-GAxWtVqQEHaLVBSgQFnoECCwQAQ&usg=AOvVaw2QOTzlzRh9eKc9DAEc7c2w">
                <img src="/imgs/home-images/ascensoskywalker.webp" alt="thelastjedi" />
              </a>
            </div>
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