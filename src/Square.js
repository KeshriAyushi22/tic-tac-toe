import './App.css';

export function Square(props) {
    return (
        <div className={`Square ${props.border}`}>
            <div className={`Value ${props.val}`}>{props.val}</div>
        </div>)
}