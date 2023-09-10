import "./Header.css";
import Logo from "../../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="../index.html">
            <img src={Logo} alt="LOGO" className="navbar-brand-img" />
            <span className="navbar-brand-name">Panadería Artesanal</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Panadería Artesanal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                <li className="nav-item">
                  <a className="nav-link" href="../index.html">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./nosotros.html">
                    Nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="./productos.html">
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./recetas.html">
                    Recetas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./contacto.html">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
