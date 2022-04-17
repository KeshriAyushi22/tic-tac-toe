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
            <Square border='bottom-right' />
            <Square border='bottom-right' />
            <Square border='bottom' />
          </div>
          <div style={{ display: 'flex' }}>
            <Square border='bottom-right' />
            <Square border='bottom-right' />
            <Square border='bottom' />
          </div>
          <div style={{ display: 'flex' }}>
            <Square border='right' />
            <Square border='right' />
            <Square />
          </div>
        </div>
        <button className='btn'> Clear </button>
      </header>
    </div>
  );
}

export default App;
