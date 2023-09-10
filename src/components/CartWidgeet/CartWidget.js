const CartWidget = ({ itemsCount }) => {
  return <i className="bi bi-cart4 fs-5">{itemsCount || 0}</i>;
};

export default CartWidget;
