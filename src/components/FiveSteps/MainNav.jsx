"use client"

import { useState } from "react"
import { Box, Typography } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import { Icon } from "@iconify/react"

const steps = [
  { title: " گام اول", component: Step1 },
  { title: "گام دوم", component: Step2 },
  { title: "گام سوم", component: Step3 },
  { title: "گام چهارم", component: Step4 },
  { title: "گام پنجم", component: Step5 },
]

const MainNav = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#1F2029",
        p: { xs: 1.5, md: 3 },
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      

      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid #FFF3",
          pb: 2,
          overflowX: { xs: "auto", md: "visible" },
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: "center",
          gap: { xs: 2, md: 3 },
          direction: "rtl",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: index === activeStep ? 1.1 : 1,
              opacity: index === activeStep ? 1 : 0.6,
              filter: index === activeStep ? "blur(0)" : "blur(0.3px)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveStep(index)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              position: "relative",
              padding: "0 10px",
              fontSize: "16px",
              whiteSpace: "nowrap",
              color: index === activeStep ? "#00CC99" : "#d3d3d3",
            }}
          >
            <Typography variant="h6" fontSize={{ xs: 16, md: 18 }}>
              {step.title}
              {index < activeStep && (
                <Icon icon="solar:check-circle-bold" color="#00cc99" width={18} style={{ marginRight: 5 }} />
              )}
            </Typography>
            {index === activeStep && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "4px",
                  backgroundColor: "#00CC99",
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                }}
              />
            )}
          </motion.div>
        ))}
      </Box>

      <Box width="100%" mt={3}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {steps[activeStep].component()}
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  )
}

export default MainNav