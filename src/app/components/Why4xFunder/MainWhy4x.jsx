import { Grid, Typography } from "@mui/material";
import MainLayout from "./MainLayout";

const MainWhy4x = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      mt={{ xs: 10, md: 20 }}
    >
      <Typography fontSize={{ xs: 22, md: 28 }} fontWeight={900} mb={4}>
        چرا فورایکس فاندر
      </Typography>
      <MainLayout />
    </Grid>
  );
};

export default MainWhy4x;
