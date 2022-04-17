import './App.css';
import { Square } from './Square';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic-Tac-Toe
        </p>
        <div className='Board'>
          <div style={{ display: 'flex' }}>
            <Square />
            <Square />
            <Square />
          </div>
          <div style={{ display: 'flex' }}>
            <Square />
            <Square />
            <Square />
          </div>
          <div style={{ display: 'flex' }}>
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
