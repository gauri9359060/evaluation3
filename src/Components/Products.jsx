import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    width:300px;
    marging:auto;

  `
const Wrapper = styled.div`
  margin:20px;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  gap:20px;
`
  return (
    <Wrapper>
      {product.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <ProductsWrapper>
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </ProductsWrapper>
        </Link>
        
      ))}
    </Wrapper>
  );
};

export default Products;
