import CartWidget from "../CartWidgeet/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div className="container d-flex justify-content-center flex-wrap gap-2 py-2">
        <button>Especialidad Masa Madre</button>
        <button>Especialidad Masa Dulce</button>
        <button>Especialidad Temporada</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
