import { useSelector } from "react-redux";
import CartItem from '../cart-item/index'

// Styles
import * as Styles from "./styles";
import { selectProductTotalPrice } from "../../reudx/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  const productsTotalPrice = useSelector(selectProductTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map(products => <CartItem product={products}/>)}
        <Styles.CartTotal>R$: {productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
