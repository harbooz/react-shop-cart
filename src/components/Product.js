import React from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const ProductItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 250px;
height: auto;
margin: 10px 10px 30px;
border: solid 1px #18294c;
padding: 5px;

h4 {
    margin: 0;
    padding: 10px;
    text-align: left;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.product__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
}
`;

const BoxImage = styled.div`
    width: calc(250px - 10px);
    height: 280px;
    overflow: hidden;
    background: #124253;
    display: flex;
    align-items: center;
    justify-content: center;
    
img {
    width: 150px;
    height: auto;
  }
`

const CartButton = styled.button`
width: auto;
height: auto;
padding: 4px 10px;
background: #3fd9e5;
font-size: 12px;
text-transform: initial;
outline: unset;
border: unset;
cursor: pointer;
border-radius: 4px;
`;

const DetailsButton = styled(CartButton)`
background: #1c747b;
color: #FFF;
`

function Product({ data }) {
  const { addItem } = useCart();
  const nav = useNavigate();

  const handleDetails = () => {
    nav("/description/" + data.title);
  }

  return (
    <ProductItem className="product__card">
         <BoxImage className='boxImage'>
         <img src={data.imageUrl} alt={data.title}/>
        </BoxImage>          
      <h4>{data.title}</h4>
      <div className="product__footer">
      <div>{data.price} RON</div>
      <DetailsButton onClick={handleDetails}>Details</DetailsButton>
      <CartButton onClick={() => addItem(data)}>Add to cart</CartButton>
      </div>
      
    </ProductItem>
  );
}

export default Product;