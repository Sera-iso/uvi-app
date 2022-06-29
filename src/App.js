import Search from './Search'

import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header>
        <h1>Check UV Index</h1>
      </header>
      <main>
          <Search defaultCity="Amsterdam" />
      </main>
    </div>
    <footer>
      Coded with ❤️ by <a href="https://www.instagram.com/zee_codes/" target="_blank" rel="noreferrer">@zee_codes</a> and <a href="https://www.instagram.com/codewithsera/" target="_blank" rel="noreferrer">@codewithsera</a><br />
      as project for the Hackathon promoted by <a href="https://www.linode.com/" target="_blank" rel="noreferrer">Linode</a> and <a href="https://hashnode.com/" target="_blank" rel="noreferrer">Hashnode</a>
    </footer>
    </div>
  );
}

export default App;
