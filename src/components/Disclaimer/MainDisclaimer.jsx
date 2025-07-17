"use client"

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Disclaimer from "./Disclaimer"
import { motion } from "framer-motion"

const MainDisclaimer = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        px={isSmall ? 3 : 0}
        mt={20}
        component={motion.div}
        variants={itemVariants}
      >
        <Typography
          fontSize={isSmall ? 22 : 30}
          fontWeight={900}
          color="white"
          mb={3}
          textAlign="center"
          component={motion.h2}
          variants={itemVariants}
        >
          بیانیه ریسک پراپ فورایکس فاندر
        </Typography>
        <motion.div variants={itemVariants}>
          <Disclaimer />
        </motion.div>
      </Grid>
    </motion.div>
  )
}

export default MainDisclaimer
