'use client'

import { Typography, Grid, useTheme, useMediaQuery, Box } from "@mui/material"
import TestimonialSection from "./TestimonialSection"

const MainUserComments = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box mt={20} px={isSmall ? 2 : 5}>
      <Grid container direction="column" alignItems="center">
        <Typography
          fontSize={isSmall ? 24 : 30}
          fontWeight="bold"
          textAlign="center"
        >
          <span style={{ color: "#00CC99" }}>نظرات کاربران</span> درباره فورایکس
          فاندر
        </Typography>
        <Typography my={1} textAlign="center" fontSize={isSmall ? 14 : 16}>
          ما را از نقاط مثبت و منفی کارمان مطلع کنید تا میزبان بهتری برای شما
          عزیزان باشیم
        </Typography>
      </Grid>
      <TestimonialSection />
    </Box>
  )
}
export default MainUserComments
