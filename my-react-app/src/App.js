import React from 'react';
import AniFlixLogo from '../src/img/AniFlixLogo.png'
import AOT from './img/AOT.jpg'
import './App.css';
import Categories from './categories';
import FeaturedShows from './Featured.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {}
        <img src={AniFlixLogo} alt="aniFlix Logo" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Genres</li>
            <li>Search</li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </header>

      <section className="Head">
      <div className="image-container">
        <img src={AOT} alt="Attack on Titan" />
        <div className="overlay"></div>
      </div>
      </section>

      <main>
        {/* Main Content: Display anime content, featured shows, or categories */}

        <section className="featured">
          <h2>Featured Shows</h2>
          <FeaturedShows />
        </section>

        <section className="categories">
          <h2>Categories</h2>
          <Categories />
        </section>
      </main>

      <footer>
        {/* Footer: Add links, information, or copyright details */}
        <p>&copy; 2023 aniFlix</p>
      </footer>
    </div>
  );
}

export default App;
