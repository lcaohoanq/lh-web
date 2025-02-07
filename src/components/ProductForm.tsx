import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  IconButton,
} from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  images: File[];
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: 0,
    category: "",
    images: [],
  });
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...files],
      }));

      // Create preview URLs
      const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));

    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData to handle file uploads
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((image: File) => {
          submitData.append("images", image);
        });
      } else {
        submitData.append(key, value.toString());
      }
    });

    // TODO: Implement API call
    console.log("Submitting:", submitData);
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add New Product
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="name"
              label="Product Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="number"
              name="price"
              label="Price"
              value={formData.price}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: "$",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
            >
              Upload Images
              <VisuallyHiddenInput
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {previewUrls.map((url, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: 100,
                    height: 100,
                  }}
                >
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveImage(index)}
                    sx={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      bgcolor: "background.paper",
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProductForm;
