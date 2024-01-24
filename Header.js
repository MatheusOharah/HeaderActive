import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../img/LogoHouse.png";
import useAuth from "../hooks/useAuth";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const { signout, signed } = useAuth();

  const handleSignOut = () => {
    signout();

    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  fixed-top  navH">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="110" height="50" id="LogoHouse"></img>
          </a>
          <button
            className="navbar-toggler bg-info"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="me-2 navT" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0" id="nav-menu">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link className="tx" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className={location.pathname === "/contato" ? "active" : ""}>
                <Link className="tx" to="/contato">
                  Contato
                </Link>
              </li>
              <li className={location.pathname === "/sobre" ? "active" : ""}>
                <Link className="tx" to="/sobre">
                  Sobre
                </Link>
              </li>
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link className="tx" to="/mpubli">
                  Minhas Publis
                </Link>
              </li>
              {signed ? (
                <button
                  className="btn btn-danger ms-auto mb-2"
                  onClick={handleSignOut}
                >
                  <i className="bi bi-person"></i>
                  &nbsp;Sair
                </button>
              ) : (
                <Link className="Login" to="/login">
                  <i className="bi bi-person"></i>
                  &nbsp;Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;