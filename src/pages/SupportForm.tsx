import { Box, Container, Typography } from "@mui/material";
import React from "react";

const SupportForm = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ mb: 3, mt: 3 }}>
        <Typography variant="h4">
          Hướng dẫn thay mực máy in Canon 2900
        </Typography>
      </Box>
      <iframe
        width="897"
        height="505"
        src="https://www.youtube.com/embed/4CPit4-r_bU"
        title="Cách Thay Mực Máy IN canon 2900 siêu rẻ | Kênh Học Thêm"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Box sx={{ mb: 3, mt: 3 }}>
        <Typography variant="h4">
          Hướng dẫn cài driver máy in Canon 2900
        </Typography>
      </Box>
      <iframe
        width="897"
        height="505"
        src="https://www.youtube.com/embed/XmK6LCmy1Gg"
        title="Hướng dẫn cài đặt máy in Canon Lbp 2900 |  Hướng dẫn sử dụng chi tiết"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Box sx={{ mb: 3, mt: 3 }}>
        <Typography variant="h4">Hướng dẫn sửa máy mất kết nối Wifi</Typography>
      </Box>
      <iframe
        width="897"
        height="505"
        src="https://www.youtube.com/embed/gl1Ca3gMeCs"
        title="Máy tính bị mất kết nối wifi - lỗi máy tính không kết nối được wifi Win 10"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default SupportForm;
