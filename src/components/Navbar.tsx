import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavigateButton from "./NavigateButton";

const Navbar: React.FC = () => {
  const { id } = useParams();
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {id && <NavigateButton to="/" />}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Trang Chủ
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {isAuthenticated && (
            <Button color="inherit" component={Link} to="/admin">
              Admin
            </Button>
          )}
          {isAuthenticated ?? (
            <Button color="inherit" onClick={logout}>
              Đăng xuất
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
