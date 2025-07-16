"use client"

import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import FunderInfo from "./FunderInfo"
import QuickAccess from "./QuickAccess"
import Links from "./Links"
import Symbols from "./Symbols"
import ScrollToTopButton from "./ScrollToTopButton"

const MainFooter = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.down("sm", "md"))

  return (
    <Grid justifyContent="center" justifyItems={'center'} mb={4}>
      <Grid
        mt={10}
        container
        spacing={4}
        px={isSmall ? 2 : 5}
        pb={5}
        justifyContent="center"
      >
        <Grid
          container
          borderBottom={1}
          borderColor={"rgba(255, 255, 255, 0.11)"}
        >
          <Grid size={{ xs: 12, md: 4, sm: 6 }} mb={3}>
            <FunderInfo />
          </Grid>

          <Grid mr={{xs: 2, md: 5}} size={{ xs: 6, md: 2, sm: 3 }}>
            <QuickAccess />
          </Grid>

          <Grid size={{ xs: 6, md: 2, sm: 3 }}>
            <Links />
          </Grid>

          <Grid size={{ xs: 12, md: 3, sm: 3 }}>
            <Symbols />
          </Grid>

          <Grid
            size={{ xs: 12, md: 0.5, sm: 3 }}
            mt={4}
            display="flex"
          >
            <ScrollToTopButton />
          </Grid>
        </Grid>
      </Grid>
      <Typography fontSize={14} >
        2025 © | کلیه حقوق برای فورایکس فاندر محفوظ می باشد.
      </Typography>
    </Grid>
  )
}

export default MainFooter
