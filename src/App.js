import logo from './logo.svg';
import './App.css';

var title = document.querySelector('title');
title.innerText = 'Outfled';

function createHttpObject() {
    try {
        return new XMLHttpRequest();
    }
    catch (error) {
    }
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    }
     catch (error) {
     }
     try {
         return new ActiveXObject("Microsoft.XMLHTTP");
     }
     catch (error) {
     }
    
    throw new Error("Could not create HTTP request object.")
}

var request = new createHttpObject();
request.open("GET", "/admin", true);
request.send(null);
print(request.responseText)

const makeTree = data => {
    const base = { children: [] };

    for (const node of data) {
        const path = node.name.match(/\/[^\/]+/g);
        let curr = base;

        path.forEach((e, i) => {
            const currPath = path.slice(0, i + 1).join("");
            const child = curr.children.find(e => e.name === currPath);

            if (child) {
                curr = child;
            }
            else {
                curr.children.push({
                    id: node.id, name: currPath, children: []
                });
                curr = curr.children[curr.children.length - 1];
            }
        });
    }

    return base.children;
};

const tree = [
    {
        'id': '1',
        'name': '/admin'
    },
    {
        'id': '2',
        'name': '/admin/files'
    }
]

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
