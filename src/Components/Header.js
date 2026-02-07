import logo from "../Assets/Logo.svg"
import "../Styles/Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="header logo" />
            </div>

            <ul className="header-ul">
                <li><a href="#">Why Oneflow?</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <button>Get a demo</button>
                <button>Log in</button>
                <i className="fas fa-earth"></i>
            </ul>
        </div>
    )
}

export default Header;