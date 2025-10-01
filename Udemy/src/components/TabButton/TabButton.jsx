import './TabButton.css';

export default function TabButton({children, onSelect}){
    return(
        <button className="tab-button" onClick={onSelect}>{children}</button>
    );
}