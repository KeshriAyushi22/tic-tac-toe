import './App.css';

export function Square(props) {
    return (
        <div className={`Square ${props.border}`} onClick={() => props.updateMoves(props.index)}>
            <div className={`Value ${props.val}`}>{props.val}</div>
        </div>)
}