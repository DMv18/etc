import './Layout.css';

export default function Layout({ children, className = '', gap = '1rem' }) {
    return (
        <div className={`layout ${className}`} style={{ ['--layout-gap']: gap }}>
            {children}
        </div>
    );
}
