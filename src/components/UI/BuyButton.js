import './BuyButton.modal.scss'
const BuyButton = (props) => {
  return (
    <button>
      Купить
      <br /> за {props.price}₽
    </button>
  );
};

export default BuyButton;
