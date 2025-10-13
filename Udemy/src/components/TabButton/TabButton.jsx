import './TabButton.css';

export default function TabButton({children, onSelect}){
    return(
        <button onClick={onSelect}>{children}</button>
    );
}