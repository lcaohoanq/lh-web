import { Container, Typography } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";
import { products } from "../data/product.data";

const HomePage: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Laptop cũ
      </Typography>
      <ProductList products={products} />
      <Typography variant="h4" gutterBottom>
        Laptop
      </Typography>
      <ProductList products={products} />
      <Typography variant="h4" gutterBottom>
        Laptop
      </Typography>
      <ProductList products={products} />
    </Container>
  );
};

export default HomePage;
