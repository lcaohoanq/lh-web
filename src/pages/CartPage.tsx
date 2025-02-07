import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../context/CartContext";

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(0, item.quantity - 1))
                    }
                  >
                    <Remove />
                  </IconButton>
                  {item.quantity}
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Add />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
      </Box>
    </Container>
  );
};

export default CartPage;
