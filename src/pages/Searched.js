import React from 'react';
import data from "../data/articles.json";
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { useCart } from 'react-use-cart';


const ContainerProducts = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1200px;
margin: 40px auto;
`

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

const Searched = () => {
  const { searchTerm } = useParams();
  console.log('searchTerm:', searchTerm);
  const { addItem } = useCart(); 

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log('filteredData:', filteredData);

  return (
    <ContainerProducts>

{filteredData.length > 0 ? (
        filteredData.map((item) => (
            <ProductItem className="product__card">
            <BoxImage className='boxImage'>
            <img src={item.imageUrl} alt={item.title}/>
           </BoxImage>          
         <h4>{item.title}</h4>
         <div className="product__footer">
         <div>{item.price} RON</div>
         <CartButton onClick={() => addItem(item)}>Add to cart</CartButton>
         </div>
         
       </ProductItem>
        ))
      ) : (
        <p>No products found for the search term "{searchTerm}"</p>
      )}
    </ContainerProducts>
  );
};

export default Searched;
