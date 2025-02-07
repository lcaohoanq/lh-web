import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductForm from "./components/ProductForm";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <Box sx={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/admin" element={<ProductForm />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
