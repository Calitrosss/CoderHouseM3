import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer title="NUESTROS PRODUCTOS" />
    </>
  );
}

export default App;
