"use client";

import { Grid, useMediaQuery, useTheme } from "@mui/system";
import Traderx from "./TraderX";
import ImageSection from "./ImageSection";

const MainTraderx = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      height={isSmall ? 900 : isMedium ? (80 ? isLarge : 250) : 380}
      // sx={{ width: "20vh" }}
      bgcolor={"#272935"}
      container
      my={15}
    >
      <Grid size={{ xs: 12, md: 5 }}>
        <Traderx />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} zIndex={100} mt={-5}>
        <ImageSection />
      </Grid>
    </Grid>
  );
};

export default MainTraderx;
