import './App.css';
import { Square } from './Square';
import { useState } from 'react';

const initialArr = ['', '', '', '', '', '', '', '', '']
function App() {
  const [initialState, updateInitialState] = useState(initialArr);
  const [isXmove, updateXMove] = useState(true) //initial value to be X
  const clearBoard = () => {
    updateInitialState(initialArr);
  }
  const updateMoves = (index) => {
    const arr = initialState;
    arr[index] = isXmove ? 'X' : 'O'
    updateInitialState(arr);
    updateXMove(!isXmove);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic-Tac-Toe
        </p>
        <div className='Board'>
          <div style={{ display: 'flex' }}>
            <Square border='bottom-right' index={0} val={initialState[0]} updateMoves={updateMoves} />
            <Square border='bottom-right' index={1} val={initialState[1]} updateMoves={updateMoves} />
            <Square border='bottom' index={2} val={initialState[2]} updateMoves={updateMoves} />
          </div>
          <div style={{ display: 'flex' }}  >
            <Square border='bottom-right' index={3} val={initialState[3]} updateMoves={updateMoves} />
            <Square border='bottom-right' index={4} val={initialState[4]} updateMoves={updateMoves} />
            <Square border='bottom' index={5} val={initialState[5]} updateMoves={updateMoves} />
          </div>
          <div style={{ display: 'flex' }} >
            <Square border='right' index={6} val={initialState[6]} updateMoves={updateMoves} />
            <Square border='right' index={7} val={initialState[7]} updateMoves={updateMoves} />
            <Square index={8} val={initialState[8]} updateMoves={updateMoves} />
          </div>
        </div>
        <button className='btn' onClick={() => clearBoard()}> Clear </button>
      </header>
    </div>
  );
}

export default App;
