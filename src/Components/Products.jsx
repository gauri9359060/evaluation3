import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3001/Product")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  };

  const ProductsWrapper= styled.div`
    border:1px solid red;
    width:30%;
    marging:auto;

  `
const Wrapper = styled.div`
  margin:20px;
  display:flex;
  flex-direction:row;
  gap:20px;
`

  // product.map((item)=>{
  //   console.log(item.product)
  // })
  return (
    <Wrapper>
      {product.map((item) => (
        <ProductsWrapper>
        <p>{item.product}</p>
        <p>{item.price}</p>
        <p>{item.category}</p>
        </ProductsWrapper>
      ))}
    </Wrapper>
  );
};

export default Products;
