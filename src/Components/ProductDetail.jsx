import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  margin: auto;
  padding: 60px;
  width: 400px;
  text-align: center;
`;

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/product/${productId}`)
      .then((response) => response.json())
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>{productId}</h1>
    </Container>
  );
};

export default ProductDetail;
