import { Container, Typography } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";

const HomePage: React.FC = () => {
  // Mock data - replace with API call
  const products = [
    {
      id: "1",
      name: "Sample Product",
      description: "This is a sample product",
      price: 99.99,
      images: ["/api/placeholder/400/300"],
      category: "Electronics",
      createdAt: new Date(),
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <ProductList products={products} />
    </Container>
  );
};

export default HomePage;
