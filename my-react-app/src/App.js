import React from 'react';
import AniFlixLogo from '../src/img/AniFlixLogo.png'
import AOT from './img/AOT.jpg'
import './App.css';

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

      <main>
        {/* Main Content: Display anime content, featured shows, or categories */}

        <section className="Head">
          <img src={AOT}/>
        </section>

        <section className="featured">
          <h2>Featured Shows</h2>
          {/* Add featured anime here */}
        </section>

        <section className="categories">
          <h2>Categories</h2>
          {/* Display anime categories */}
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
