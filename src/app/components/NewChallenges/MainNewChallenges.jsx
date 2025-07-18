"use client"

import { Icon } from "@iconify/react"
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import Image from "next/image"
import { motion } from "framer-motion"
import React from "react"

const MainNewChallenges = () => {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.down("md"))

  const getPhoneImageWidth = () => {
    if (isSmall) return 300
    if (isMedium) return 500
    return 650
  }

  const getPhoneImageHeight = () => {
    if (isSmall) return 200
    if (isMedium) return 380
    return 600
  }

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const textItemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { type: "smooth", bounce: 0.4, duration: 1 },
    },
  }

  return (
    <Grid
      mt={{ xs: 0, sm: 0, md: 15 }}
      height={isSmall ? "100vh" : "45vh"}
      container
      bgcolor="#272935"
      px={{ xs: 2, sm: 4, md: 15 }}
      py={{ xs: 3, sm: 5, md: 0 }}
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      direction={{ xs: "column", md: "row" }}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <Grid
        item
        xs={12}
        md={6}
        mt={{ xs: 0, sm: 0, md: -12 }}
        pr={{ xs: 0, md: 10 }}
        component={motion.div}
        variants={textContainerVariants}
      >
        <motion.div variants={textItemVariants}>
          <Box display="flex" alignItems="center" mb={2}>
            <Icon icon="streamline-sharp:star-2-solid" width="28" height="28" />
            <Typography
              fontWeight="bold"
              fontSize={{ xs: 20, sm: 26, md: 32 }}
              color="white"
              mx={2}
            >
              آماده <span style={{ color: "#e5b976" }}>چالش جدید</span> هستی؟
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={textItemVariants}>
          <Typography
            fontSize={{ xs: 18, sm: 24, md: 30 }}
            fontWeight={900}
            textAlign="center"
            mt={1}
            mr={5}
          >
            همین الان شروع کن
          </Typography>
        </motion.div>

        <motion.div variants={textItemVariants}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="flex-start"
            my={3}
            gap={2}
          >
            <Typography
              fontSize={{ xs: 14, sm: 15, md: 16 }}
              pr={{ md: 3 }}
              borderLeft={{ md: 1 }}
              borderColor="#444"
            >
              با ما در ارتباط باشید
            </Typography>
            <Typography fontSize={{ xs: 14, sm: 15, md: 18 }}>
              ما ۷ روز هفته ۲۴ ساعت در دسترس هستیم
            </Typography>
          </Box>
        </motion.div>

        <motion.div variants={textItemVariants}>
          <Box textAlign="right" pr={2}>
            <Button
              variant="contained"
              sx={{
                px: 3,
                py: 1.5,
                bgcolor: "#00d285",
                borderRadius: 2.5,
                fontSize: { xs: 16, sm: 18 },
                display: "flex",
                alignItems: "center",
              }}
            >
              تماس با ما
              <Icon
                icon="akar-icons:arrow-back"
                width="24"
                height="24"
                style={{ marginRight: 10 }}
              />
            </Button>
          </Box>
        </motion.div>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        textAlign="center"
        mt={{ xs: 0, md: -8 }}
        component={motion.div}
        variants={imageVariants}
      >
        <Image
          src="/Photos/phone.png"
          alt="Phone"
          width={getPhoneImageWidth()}
          height={getPhoneImageHeight()}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  )
}

export default MainNewChallenges
