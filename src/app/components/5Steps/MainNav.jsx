"use client";

import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const steps = [
  { title: " گام اول", component: Step1 },
  { title: "گام دوم", component: Step2 },
  { title: "گام سوم", component: Step3 },
  { title: "گام چهارم", component: Step4 },
  { title: "گام پنجم", component: Step5 },
];

const MainNav = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        width: "90%",
        backgroundColor: "#1F2029",
        p: { xs: 1.5, md: 3 },
        border: "1px solid rgba(0, 56, 31, 0.8)",
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
            whileHover={{ color: "#00CC99" }}
            onClick={() => setActiveStep(index)}
            style={{
              color: index === activeStep ? "#00CC99" : "#d3d3d3",
              cursor: "pointer",
              textAlign: "center",
              position: "relative",
              padding: "0 10px",
              fontSize: "16px",
              whiteSpace: "nowrap",
            }}
          >
            <Typography variant="h6" fontSize={{ xs: 16, md: 18 }}>
              {step.title}
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
        {steps[activeStep].component()}
      </Box>
    </Box>
  );
};

export default MainNav;
