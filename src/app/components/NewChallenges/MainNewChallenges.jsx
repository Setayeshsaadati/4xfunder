"use client";

import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const MainNewChallenges = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      my={{ xs: 0, sm: 0, md: 10 }}
      height={isSmall ? "100vh" : "45vh"}
      container
      bgcolor="#272935"
      px={{ xs: 2, sm: 4, md: 10 }}
      py={{ xs: 3, sm: 5, md: 0 }}
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      direction={{ xs: "column", md: "row" }}
    >
      <Grid item xs={12} md={6} mt={{ xs: 0, sm: 0, md: -7 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Icon icon="streamline-sharp:star-2-solid" width="28" height="28" />
          <Typography
            fontWeight="bold"
            fontSize={{ xs: 20, sm: 26, md: 32 }}
            color="white"
            mx={2}
          >
            آماده <span style={{ color: "#e5b976" }}>چالش جدید</span> هستی؟
          </Typography>
        </Box>

        <Typography
          fontSize={{ xs: 18, sm: 24, md: 30 }}
          fontWeight={900}
          textAlign="center"
          mt={1}
          mr={5}
        >
          همین الان شروع کن
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="flex-start"
          my={3}
          gap={2}
        >
          <Typography
            fontSize={{ xs: 14, sm: 15, md: 16 }}
            pr={{ md: 3 }}
            borderLeft={{ md: 1 }}
            borderColor="#444"
          >
            با ما در ارتباط باشید
          </Typography>
          <Typography fontSize={{ xs: 14, sm: 15, md: 18 }}>
            ما ۷ روز هفته ۲۴ ساعت در دسترس هستیم
          </Typography>
        </Box>

        <Box textAlign="right" pr={2}>
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1.5,
              bgcolor: "#00d285",
              borderRadius: 2.5,
              fontSize: { xs: 16, sm: 18 },
              display: "flex",
              alignItems: "center",
            }}
          >
            تماس با ما
            <Icon
              icon="akar-icons:arrow-back"
              width="24"
              height="24"
              style={{ marginRight: 10 }}
            />
          </Button>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        textAlign="center"
        mt={{ xs: 0, sm: 0, md: -3 }}
      >
        <Image
          src="/Photos/phone.png"
          alt="Phone"
          width={isSmall ? 300 : isMedium ? 400 : 600}
          height={isSmall ? 200 : isMedium ? 280 : 400}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default MainNewChallenges;
