import reactLogo from "@public/react.svg";

import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    return(
        <header>
            <div className="header-tabs">
                <img  className="logoHeader" onClick={()=>{navigate('/')}} src={reactLogo} alt="Logo React" />
                <a className="header-tabs-a" onClick={()=>{navigate('/tic-tac-toe')}}>Tic-Tac-Toe</a>
                <a className="header-tabs-a" onClick={()=>{navigate('/products')}}>Products</a>
            </div>
        </header>
    );
}

export default Header;