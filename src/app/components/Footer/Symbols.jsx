// components/Footer/Symbols.jsx
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const Symbols = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      justifyContent={isSmall ? "center" : "flex-end"} // 👈 center on small, right on others
      alignItems="flex-start"
    >
      <Grid item>
        <Typography fontSize={20}>نماد های فورایکس فاندر</Typography>
        <Box display={"flex"} gap={3} my={2}>
          <Box
            width={"110px"}
            height={"115px"}
            bgcolor={"#1f2029"}
            pt={2}
            pr={1}
            borderRadius={2}
          >
            <Image
              src={"/Photos/enamad.png"}
              width={99}
              height={91}
              alt="enamad"
            />
          </Box>
          <Box
            width={"105px"}
            height={"115px"}
            bgcolor={"#1f2029"}
            pb={2}
            pr={1.5}
            borderRadius={2}
          >
            <Image
              src={"/Photos/resane.png"}
              width={90}
              height={130}
              alt="resane"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Symbols;
