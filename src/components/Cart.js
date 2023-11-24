import { useCart } from "react-use-cart";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { ShopContext } from "../context/AppContextProvider";
import { useContext } from "react";
import AddButton from "./common/AddButton";
import Button from "./common/Button";

const CartWrapper = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
  width: 350px;
  background: #121b27;
  height: 100%;
  box-shadow: -15px 4px 18px -2px rgba(0,0,0,0.6);
  transition: all 5s ease;
  animation: cart .25s;
  -webkit-animation-name:  cart .25s;

  .cart__header{
    background: #019ba7;
    color: #FFF;
    h1 {
        margin: 0;
        padding: 10px;
        font-size: 18px;
    }
  }

  .list__item {
    margin-bottom: 20px;
  }

  h4 {
    margin: 0;
    padding: 20px
  }

  .empty__card {
    padding: 20px;
    font-size: 16px;
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 5px;
  }

  .cta__checkOut {
    position: absolute;
    bottom: 20px;   
    left: 0;
    right: 0;
  }

  @-webkit-keyframes cart {
    0% {
      right: -100%;
    }
    100% {
        right: 0%;
    }   
  }
`;

const Drop = styled.div`
position: fixed;
left: 0;
top: 0;
height: 100%;
width: 100%;
`

export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const { cartTotal } = useCart();
  const { toggleAction, active } = useContext(ShopContext);


  return (
    <>
      {active && (
        <div>
        <CartWrapper  className={active ? "slideIn" : "slideout"}>
            <div className="cart__header">
            <h1>Cart ({totalUniqueItems})</h1>
            <IoMdClose onClick={toggleAction} size={32} />
            </div>

          {isEmpty ? 
          ( <p className="empty__card">Your cart is empty</p>) 
          :
           (<ul>
            {items.map((item) => (
              <li key={item.id} className="list__item">
                {item.quantity} x {item.title} &nbsp; <br/>
                <AddButton
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </AddButton>
                <AddButton
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </AddButton>
                <AddButton className="remove--item" onClick={() => removeItem(item.id)}>&times;</AddButton>
              </li>
            ))}
          </ul>)}

          {cartTotal === 0 ? "" : (<h4>Total: {cartTotal} RON</h4>)}

          <div className="cta__checkOut">
           <Button type="submit">Check out</Button>
          </div>

        </CartWrapper>
        <Drop className="drop" onClick={toggleAction} />
        </div>
      )}
    </>
  );
}