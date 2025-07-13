// components/Footer/ScrollToTopButton.jsx
"use client";

import { Box } from "@mui/material";
import { Icon } from "@iconify/react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      bgcolor="#00CC99"
      height={30}
      p={1.5}
      borderRadius={2}
      sx={{ cursor: "pointer" }}
      onClick={scrollToTop}
    >
      <Icon icon="solar:arrow-up-outline" fontSize={30} />
    </Box>
  );
};

export default ScrollToTopButton;
