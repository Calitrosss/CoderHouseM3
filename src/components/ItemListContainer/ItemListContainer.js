import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  return (
    <main className="main container-fluid">
      <section className="blank-section">
        <h1>{title}</h1>
      </section>
    </main>
  );
};

export default ItemListContainer;
