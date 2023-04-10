import logo from './logo (1).svg';
import './App.css';

var title = document.querySelector('title');
title.innerText = 'Outfled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In development.
        </p>
        <a
          className="App-link"
          href="https://linktr.ee/outfled"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link Tree
        </a>
      </header>
    </div>
  );
}

export default App;
