import reactLogo from "@public/react.svg";
import { useNavigate } from 'react-router-dom';
import Img from '@components/Img/Img.jsx';

function Header(){
    const navigate = useNavigate();

    function ToJS() {
        window.location.replace("http://127.0.0.1:5500/index.html");
    }


    return(
        <header>
            <div className="header-tabs">
                <img  className="logoHeader" onClick={()=>{navigate('/')}} src={reactLogo} alt="Logo React" />
                <a className="header-tabs-a" onClick={()=>{navigate('/tic-tac-toe')}}>Tic-Tac-Toe</a>
                <a className="header-tabs-a" onClick={()=>{navigate('/products')}}>Products</a>
                <a className="header-tabs-a" onClick={()=>{navigate('/pokedex')}}>Pokedex</a>
            </div>

            <label className="header-tabs-user" style={{cursor: 'pointer', margin: '0 10px'}} onClick={ToJS}>
                <img className="header-tabs-a" style={{width:'9%'}} src="https://static.frontendmasters.com/assets/courses/2023-07-06-vanilla-js-apps/thumb.webp" alt="Logo JS" className="logoHeader" />
            </label>

            <div className="header-tabs-user">
                <a className="header-tabs-a" onClick={()=>{navigate('/login')}}>Login</a>
                <a className="header-tabs-a" onClick={()=>{navigate('/register')}}>Register</a>
            </div>
        </header>
    );
}

export default Header;