import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";
import { products } from "../data/product.data";

const HomePage: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Laptop cũ
        </Typography>
        <ProductList products={products} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Màn hình
        </Typography>
        <ProductList products={products} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Máy in Mực in
        </Typography>
        <ProductList products={products} />
      </Box>
    </Container>
  );
};

export default HomePage;
