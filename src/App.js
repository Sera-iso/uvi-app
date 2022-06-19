import Search from './Search'
import ImageUploader from './ImageUploader'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search defaultCity="Amsterdam" />
      </header>
        <ImageUploader />
    </div>
  );
}

export default App;
