import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContext";

const ProductDetail: React.FC = () => {
  // const { id } = useParams();
  const { addToCart } = useCart();

  // Mock data - replace with API call
  const product = {
    id: "1",
    name: "Sample Product",
    description: "This is a sample product with detailed description.",
    price: 99.99,
    images: ["/api/placeholder/400/300"],
    category: "Electronics",
    createdAt: new Date(),
  };

  return (
    <Container sx={{ py: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={product.images[0]}
              alt={product.name}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Category: {product.category}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProductDetail;
