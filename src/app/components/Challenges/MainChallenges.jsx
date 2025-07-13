"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ChallengesHeader from "./ChallengesHeader";

const MainChallenges = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      height={isSmall ? "280vh" : "120vh"}
      mb={isSmall ? 30 : isMedium ? 80 : isLarge ? 20 : 30}
    >
      <ChallengesHeader />
    </Grid>
  );
};

export default MainChallenges;
