"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FunderInfo from "./FunderInfo";
import QuickAccess from "./QuickAccess";
import Links from "./Links";
import Symbols from "./Symbols";
import ScrollToTopButton from "./ScrollToTopButton";

const MainFooter = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      spacing={4}
      px={isSmall ? 2 : 8}
      pt={10}
      pb={5}
      bgcolor="#1a1b22"
      justifyContent="center"
    >
      <Grid size={{ xs: 12, md: 4 ,sm: 6  }}>
        <FunderInfo />
      </Grid>

      <Grid  size={{ xs: 6, md: 2 ,sm: 3  }}>
        <QuickAccess />
      </Grid>

      <Grid size={{ xs:6, md: 2 ,sm: 3 }}>
        <Links />
      </Grid>

      <Grid size={{ xs: 12, md: 3 ,sm: 3}} >
        <Symbols />
      </Grid>

      <Grid size={{ xs: 12, md: .5 ,sm: 3 }} mt={4} display="flex" justifyContent="center">
        <ScrollToTopButton />
      </Grid>
    </Grid>
  );
};

export default MainFooter;
