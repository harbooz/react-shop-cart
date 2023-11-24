import React from "react";
import data from "../data/articles.json"
import { styled } from "styled-components";
import Product from "../components/Product";


const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px auto;
`;

function Home() {
  return <>
            <ProductWrapper className="container">
              {data.map((product) => (
             <Product key={product.id} data={product}/>
              ))}
            </ProductWrapper>
  </>;
}

export default Home;