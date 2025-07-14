import { Box, Grid } from "@mui/material"
import FeatureItems from "./FeatureItems"
import PriceList from "./PriceList"

const MainFeatures = () => {
  return (
    <Grid container direction="column" alignItems="center" rowGap={4}>
      <Box
        sx={{
          width: {xs: '95%', md: '90%' },
          bgcolor: "#1F2029",
          border: 2,
          borderRadius: "30px",
          borderColor: "rgba(86, 87, 88, 0.95)",
          px: { xs: 1, md: 4 },
          py: { xs: 1, md: 2 },
        }}
      >
        <FeatureItems />
      </Box>

      <Box
        sx={{
          width: {md: "90%" , xs :"95%"},
          bgcolor: "rgba(30, 33, 43, 0.95)",
          border: 2,
          borderRadius: 6,
          borderColor: "rgba(86, 87, 88, 0.95)",
           px: { xs: 1, md: 4 },
          py: { xs: 1, md: 0 },
        }}
      >
        <PriceList />
      </Box>
    </Grid>
  )
}

export default MainFeatures
