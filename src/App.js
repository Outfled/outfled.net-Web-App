import logo from './logo.svg';
import './App.css';

var title = document.querySelector('title');
title.innerText = 'Outfled';


const file = await Storage.get("private/640x800_21ee17ea-ab0a-44ca-8285-9cfd33a794f9.jpg", {
    level: "private"
});
    

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
