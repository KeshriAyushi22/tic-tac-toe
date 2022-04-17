import './App.css';

export function Square(props) {
    return (
        <div className={`Square ${props.border}`}>
            <div className='Value'>X</div>
        </div>)
}