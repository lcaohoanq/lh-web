import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavigateButton from "./NavigateButton";
import CategoryBar from "./CategoryBar";
import {
  AdminPanelSettings,
  ShoppingCart,
  VerifiedUser,
} from "@mui/icons-material";
import Settings from "@mui/icons-material/Settings";

const Navbar: React.FC = () => {
  const { id } = useParams();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {id && <NavigateButton to="/" />}
          {/* Left side: Logo and text */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src="/logo.jpeg" // replace with your image URL
              alt="Logo"
              sx={{ width: 40, height: 40, marginRight: 1 }} // adjust size and margin as needed
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Lưu Hải
            </Typography>
          </Box>
          {/* Right side: Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {isAuthenticated && (
              <Button color="inherit" component={Link} to="/admin">
                Admin
              </Button>
            )}
            <Button
              color="inherit"
              onClick={() => navigate("/hotro")}
              startIcon={
                <Badge color="error">
                  <Settings />
                </Badge>
              }
            >
              Hỗ Trợ
            </Button>
            {isAuthenticated ? (
              <Button color="inherit" onClick={logout}>
                Đăng xuất
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/auth"
                startIcon={
                  <Badge color="error">
                    <VerifiedUser />
                  </Badge>
                }
              >
                Đăng nhập
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <CategoryBar />
    </>
  );
};

export default Navbar;
