import React from "react";
import { Box, Container, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { categories } from "../data/categories.data";

const CategoryBar: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            py: 1,
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "background.paper",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: "4px",
            },
          }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              component={Link}
              to={`/category/${category.slug}`}
              sx={{
                color: "text.primary",
                minWidth: "auto",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "primary.main",
                },
                ...(location.pathname === `/category/${category.slug}` && {
                  color: "primary.main",
                  borderBottom: 2,
                  borderColor: "primary.main",
                  borderRadius: 0,
                }),
              }}
            >
              {category.name}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CategoryBar;
