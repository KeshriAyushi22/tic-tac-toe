import './App.css';
import { Square } from './Square';
import { useState } from 'react';

const initialArr = ['X', 'O', '', '', '', '', '', '', '']
function App() {
  const [initialState, updateInitialState] = useState(initialArr);
  const clearBoard = () => {
    console.log('here')
    updateInitialState(initialArr);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic-Tac-Toe
        </p>
        <div className='Board'>
          <div style={{ display: 'flex' }}>
            <Square border='bottom-right' val={initialState[0]} />
            <Square border='bottom-right' val={initialState[1]} />
            <Square border='bottom' val={initialState[2]} />
          </div>
          <div style={{ display: 'flex' }} val={initialState[3]}>
            <Square border='bottom-right' val={initialState[4]} />
            <Square border='bottom-right' val={initialState[5]} />
            <Square border='bottom' />
          </div>
          <div style={{ display: 'flex' }} val={initialState[6]}>
            <Square border='right' val={initialState[7]} />
            <Square border='right' val={initialState[8]} />
            <Square />
          </div>
        </div>
        <button className='btn' onClick={() => clearBoard()}> Clear </button>
      </header>
    </div>
  );
}

export default App;
