'use client'

import { Typography, Grid, useTheme, useMediaQuery, Box } from "@mui/material"
import TestimonialSection from "./TestimonialSection"
import { motion } from "framer-motion"

const MainUserComments = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6 }
    },
    exit: { opacity: 0 }
  }

  const item = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "smooth", bounce: 0.8, duration: 0.6 }
    },
    exit: { opacity: 0, y:10, transition: { duration: 0.4 } }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      exit="exit"
    >
      <Box mt={20} px={isSmall ? 2 : 5}>
        <Grid container direction="column" alignItems="center">
          <motion.div variants={item}>
            <Typography
              fontSize={isSmall ? 24 : 30}
              fontWeight="bold"
              textAlign="center"
            >
              <span style={{ color: "#00CC99" }}>نظرات کاربران</span> درباره فورایکس
              فاندر
            </Typography>
          </motion.div>
          <motion.div variants={item}>
            <Typography my={1} textAlign="center" fontSize={isSmall ? 14 : 16}>
              ما را از نقاط مثبت و منفی کارمان مطلع کنید تا میزبان بهتری برای شما
              عزیزان باشیم
            </Typography>
          </motion.div>
        </Grid>

        <motion.div variants={item}>
          <TestimonialSection />
        </motion.div>
      </Box>
    </motion.div>
  )
}

export default MainUserComments
