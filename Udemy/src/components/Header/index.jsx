import reactLogo from "../../../public/react.svg";

function Header(){
    return(
        <header>
            <nav>
                <img  className="logoHeader" src={reactLogo} alt="Logo React" />
                <a href="inex.html">Inicio</a>
                <a href="acerca.html">Acerca de</a>
                <a href="contacto.html">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;