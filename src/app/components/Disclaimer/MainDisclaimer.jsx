"use client";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Disclaimer from "./Disclaimer";

const MainDisclaimer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      px={isSmall ? 3 : 0}
      mt={20}
      mb={15}
    >
      <Typography
        fontSize={isSmall ? 22 : 30}
        fontWeight={900}
        color="white"
        mb={3}
        textAlign="center"
      >
        بیانیه ریسک پراپ فورایکس فاندر
      </Typography>
      <Disclaimer />
    </Grid>
  );
};

export default MainDisclaimer;
