import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { items } = useCart();
  const navigate = useNavigate();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          E-Commerce
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {isAuthenticated && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}
          <Button
            color="inherit"
            onClick={() => navigate("/cart")}
            startIcon={
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart />
              </Badge>
            }
          >
            Cart
          </Button>
          {isAuthenticated ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/auth">
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
