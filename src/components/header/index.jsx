import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import {loginUser, logoutUser} from "../../reudx/user/actions"
import UserActionTypes from "../../reudx/user/action-types"


function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer)
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch()

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr)=> acc + curr.quantity, 0)
  }, [products])

  function handleLoginClick() {
    dispatch( loginUser({ name: "Samuel", email: "luz@gmail.com" }))
  }

  function handleLogoutClick() {
    dispatch( logoutUser(null))
  }


  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ?
          (<div onClick={handleLogoutClick}>Sair</div>)
          :
          (<div onClick={handleLoginClick}>Login</div>)
        }

        {currentUser ? (<div style={{ marginRight: '40px' }}>{currentUser.name}</div>) : null}

        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
