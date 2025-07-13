"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const ImageSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getCryptoSize = () => {
    if (isSmall) return { width: 280, height: 300 };
    if (isMedium) return { width: 400, height: 420 };
    return { width: 460, height: 480 };
  };

  const getBuyImagePosition = () => {
    if (isSmall) return { bottom: -20, right: "25%" };
    if (isMedium) return { bottom: -25, right: -20 };
    return { bottom: -30, right: -40 };
  };

  const getChartSize = () => {
    if (isSmall) return { width: 220, height: 230 };
    if (isMedium) return { width: 280, height: 300 };
    return { width: 160, height: 220 };
  };

  const cryptoSize = getCryptoSize();
  const buyImagePosition = getBuyImagePosition();
  const chartSize = getChartSize();

  return (
    <Box position="relative" width="100%" zIndex={2} mt={5}>
      {/* Main Crypto Image */}
      <Box
        textAlign="center"
        sx={{
          mt: { xs: 0, md: -3 },
        }}
      >
        <Image
          src="/Photos/crypto.png"
          width={cryptoSize.width}
          height={cryptoSize.height}
          alt="crypto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          mt: { xs: -15, md: -20 },
          mr: { xs: 1, md: 28 },
          ...buyImagePosition,
          zIndex: 3,
        }}
      >
        <Image
          src="/Photos/buy.png"
          width={chartSize.width}
          height={chartSize.height}
          alt="buy icon"
        />
      </Box>
    </Box>
  );
};

export default ImageSection;
