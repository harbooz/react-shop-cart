import React from 'react';
import data from "../data/articles.json";
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from 'react-use-cart';


const ProductWrapper = styled.div`
display: flex;
max-width: 1200px;
margin: 50px auto;

.price--product {
font-size: 20px;
font-weight: 900;
}

img {
    max-width: 400px;
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
}

`

const CartButton = styled.button`
width: 200px;
height: 40px;
padding: 4px 10px;
background: #3fd9e5;
font-size: 14px;
font-weight: 600;
outline: unset;
border: unset;
cursor: pointer;
border-radius: 4px;
`;

const BoxImage = styled.div`
margin-right: 50px;
`

function ProductDescription() {
  const { title } = useParams();
  const { addItem } = useCart();


  const item = data.find((item) => item.title === title);
  console.log(item);

  return (
    <div>
      {item ? (
        <>
        <ProductWrapper>
        <BoxImage>{<img src={item.imageUrl} alt={item.title}/>}</BoxImage>
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p className='price--product'>{item.price} RON</p>
          <CartButton onClick={() => addItem(item)}>Add to cart</CartButton>
        </div>
        </ProductWrapper>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDescription;
