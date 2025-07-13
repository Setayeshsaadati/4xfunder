import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";

const RightSection = ({ selectedComponent }) => (
  <Box
    sx={{
      mt: { xs: 4, md: 5 },
      height: { xs: "auto", md: "60vh" },
      width: "100%",
      padding:{md: '20px' , xs: '0px'},
      borderRadius: "8px",
    }}
  >
    <AnimatePresence mode="wait">{selectedComponent}</AnimatePresence>
  </Box>
);

export default RightSection;
