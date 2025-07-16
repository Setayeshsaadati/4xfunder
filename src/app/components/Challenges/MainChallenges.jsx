"use client"

import { Grid, useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import ChallengesHeader from "./ChallengesHeader"

const MainChallenges = () => {
  const theme = useTheme()

  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))
  const isLarge = useMediaQuery(theme.breakpoints.between("md", "lg"))

  return (
    <Grid
    >
      <ChallengesHeader />
    </Grid>
  )
}

export default MainChallenges
