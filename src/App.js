import logo from './logo.svg';
import './App.css';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

var title = document.querySelector('title');
title.innerText = 'Outfled';

async function myFunc() {
    const file = await Storage.get("640x800_21ee17ea-ab0a-44ca-8285-9cfd33a794f9.jpg");
}
function GetUrl(){
    const image = myFunc().then(string => {
        return value;
    });
}

function App() {
    const image = GetUrl();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    In development.
                </p>
                <a
                    className="App-link"
                    href={image}
                    target="_blank"
                    rel='noreferrer'
                >
                    Link Tree
                </a>
            </header>
        </div>
    );
}

export default App;
