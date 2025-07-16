"use client"

import { useState, useEffect } from "react"
import { Box, Button, useMediaQuery, useTheme } from "@mui/material"
import TableComponent from "./TableComponent"
import Image from "next/image"
import { motion } from "framer-motion"

const Dashboard = () => {
  const [selectedPhase, setSelectedPhase] = useState("Alpha")
  const [selectedQuantity, setSelectedQuantity] = useState(1000)

  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"))

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const coinVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } },
  }

  return (
    <Box>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box
          sx={{
            mr: isSmall ? "0px" : 2,
            mt: 2,
            width: isSmall ? "95%" : isMedium ? "90%" : "93%",
            padding: isSmall ? 0 : 2,
            borderRadius: "8px",
            display: isSmall ? "block" : "flex",
            justifyContent: "space-between",
          }}
        >
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mb: "20px",
                width: isSmall ? "100%" : "100%",
                py: 1,
                direction: "rtl",
                justifyContent: isSmall ? "center" : "flex-start",
              }}
            >
              {[1000, 2500, 5000, 10000].map((qty) => (
                <Button
                  key={qty}
                  onClick={() => setSelectedQuantity(qty)}
                  sx={{
                    bgcolor:
                      selectedQuantity === qty ? "#00CC99" : "transparent",
                    border: "1px solid",
                    borderColor:
                      selectedQuantity === qty ? "#00CC99" : "#d3d3d3",
                    color: selectedQuantity === qty ? "black" : "#d3d3d3",
                    borderRadius: "8px",
                    padding: "6px 16px",
                    fontSize: isSmall ? "14px" : "15px",
                    minWidth: 70,
                  }}
                >
                  {qty}
                </Button>
              ))}
            </Box>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mb: "20px",
                bgcolor: "#272935",
                px: 0.5,
                py: 0.5,
                borderRadius: 3,
                direction: "rtl",
                justifyContent: isSmall ? "center" : "flex-end",
                maxHeight: 45,
              }}
            >
              {["Alpha", "Beta"].map((phase) => (
                <Button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  sx={{
                    color: "white",
                    backgroundColor:
                      selectedPhase === phase ? "#00CC99" : "transparent",
                    fontSize: isSmall ? "16px" : "18px",
                    px: 2.5,
                    borderRadius: 2.5,
                    minWidth: 130,
                  }}
                >
                  {phase}
                </Button>
              ))}
            </Box>
          </motion.div>
        </Box>

        <motion.div
          variants={tableVariants}
          initial="hidden"
          animate="visible"
          key={`${selectedPhase}-${selectedQuantity}`}
          style={{
            position: 'relative'
          }}
        >
          <motion.div
            variants={coinVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: isSmall ? "none" : isMedium ? "block" : "block",
              position: 'absolute',
              left: 15,
              top: 120,
              width: 65,
              height: 55,
              zIndex: -1,
            }}
          >
            <Image
              src="/Photos/coin.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>
          <Box zIndex={100} ml={ isSmall ? 0 : isMedium ? 0 : 2.5}>
            <TableComponent phase={selectedPhase} quantity={selectedQuantity} />
          </Box>
        </motion.div>

        <motion.div
          variants={coinVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: isSmall ? "none" : isMedium ? "block" : "block",
            position: "relative",
            width: 85,
            height: 85,
            mr: 0,
            marginTop: -40,
            zIndex: -1,
          }}
        >
          <Image
            src="/Photos/coin.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Dashboard
