"use client"

import { Box, Grid } from "@mui/material"
import FeatureItems from "./FeatureItems"
import PriceList from "./PriceList"
import { motion } from "framer-motion"

const MainFeatures = () => {
  const featureVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const priceVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <Grid container direction="column" alignItems="center" rowGap={4}>
      <motion.div
        variants={featureVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "90%" },
            bgcolor: "#1F2029",
            border: 2,
            borderRadius: "30px",
            borderColor: "rgba(86, 87, 88, 0.95)",
            px: { xs: 1, md: 4 },
            py: { xs: 1, md: 2 },
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
              transition: "0.5s",
            },
            "&:hover:before": {
              left: "100%",
            },
          }}
        >
          <FeatureItems />
        </Box>
      </motion.div>

      <motion.div
        variants={priceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: { md: "90%", xs: "95%" },
            bgcolor: "rgba(30, 33, 43, 0.95)",
            border: 2,
            borderRadius: 6,
            borderColor: "rgba(86, 87, 88, 0.95)",
            px: { xs: 1, md: 4 },
            py: { xs: 1, md: 0 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <PriceList />
        </Box>
      </motion.div>
    </Grid>
  )
}

export default MainFeatures