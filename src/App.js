import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';

import Demo from './Demo';

function App() {
    return (
        <div className="App">
            <main>
                <div className="App-info">
                    <img src={logo} className="App-logo" alt="logo" />
                    <a
                        className="App-link"
                        href="https://reactjs.org/docs/error-boundaries.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn more about Error Boundaries in React
                    </a>
                </div>

                <section>
                    <Demo />
                </section>
            </main>
        </div>
    );
}

export default App;
