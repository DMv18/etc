import reactLogo from "@public/react.svg";
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '@hooks/store/useAuthStore';

function Header(){
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const logout = useAuthStore((state) => state.logout);

    function ToJS() {
        window.location.replace("http://127.0.0.1:5500/index.html");
    }

    function Authlogout() {
        logout();
        navigate('/');
    }

    function handleToggleMenu(e){
        setOpen(prevOpen => {
            const newOpen = !prevOpen;
            return newOpen;
        });
        e.stopPropagation();
    }

    function handleMenuClick(route) {
        setOpen(false);
        if (route === 'vanilla-js') {
            ToJS();
        } else {
            navigate(route);
        }
    }

    useEffect(() => {
        function handleOutsideClick(e){
            if (!menuRef.current || !hamburgerRef.current) return;
            
            if (hamburgerRef.current.contains(e.target) || menuRef.current.contains(e.target)) {
                return;
            }
            
            if (open) {
                setOpen(false);
            }
        }

        function handleEsc(e){
            if(e.key === 'Escape' && open) {
                setOpen(false);
            }
        }

        const timer = setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 0);

        document.addEventListener('keydown', handleEsc);
        
        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('keydown', handleEsc);
        };
    }, [open]);

    return(
        <header>
            <div className="header-inner">
                <div className="header-left-group">
                    <div className="header-left">
                        <img className="logoHeader" onClick={() => navigate('/')} src={reactLogo} alt="Logo React" />
                        <button ref={hamburgerRef} type="button" className="hamburger" aria-label="Toggle menu" aria-expanded={open} onClick={handleToggleMenu}>
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                        </button>
                    </div>

                    <div className="header-tabs" aria-hidden={open}>
                        <Link className="header-tabs-a" to='/dashboard'>Products</Link>
                        <Link className="header-tabs-a" to='/tablero'>Tic-Tac-Toe</Link>
                        <Link className="header-tabs-a" to='/pokedex'>Pokedex</Link>
                    </div>
                </div>

                <div className="header-right">
                    <img 
                        className="logoHeader logo-js" 
                        src="https://static.frontendmasters.com/assets/courses/2023-07-06-vanilla-js-apps/thumb.webp" 
                        alt="Logo JS" 
                        onClick={ToJS}
                    />
                    <div className="header-auth-links" aria-hidden={open}>
                        <Link className="header-tabs-a" to='/login'>Login</Link>
                        <Link className="header-tabs-a" to='/register'>Register</Link>
                        <Link className="header-tabs-a" onClick={Authlogout}>Logout</Link>
                    </div>
                </div>
            </div>

            <div ref={menuRef} className={`mobile-menu ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
                <Link role="menuitem" to='/' onClick={() => handleMenuClick('/')}>Home</Link>
                <Link role="menuitem" to='/tablero' onClick={() => handleMenuClick('/tablero')}>Tic-Tac-Toe</Link>
                <Link role="menuitem" to='/dashboard' onClick={() => handleMenuClick('/dashboard')}>Products</Link>
                <Link role="menuitem" to='/pokedex' onClick={() => handleMenuClick('/pokedex')}>Pokedex</Link>
                <Link role="menuitem" to='vanilla-js' onClick={() => handleMenuClick('vanilla-js')}>Vanilla JS</Link>
                <Link role="menuitem" to='/login' onClick={() => handleMenuClick('/login')}>Login</Link>
                <Link role="menuitem" to='/register' onClick={() => handleMenuClick('/register')}>Register</Link>
            </div>
        </header>
    );
}

export default Header;