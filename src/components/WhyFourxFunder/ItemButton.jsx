import { Button, Box } from "@mui/material"
import { motion } from "framer-motion"
import { Icon } from '@iconify/react'

const ItemButton = ({ title, isSelected, onClick, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: isSelected ? "#00CC99" : "",
        width: "100%",
        color: "#fff",
        fontSize: {sx: 15 ,md: 20},
        justifyContent: "space-between",
        padding:  2.5,
        borderRadius: {md: 5 , xs: 3},
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Icon icon={icon} style={{ marginRight: "15px", marginLeft: '15px', fontSize:  {sx: 10 ,md: 20}, marginTop: -5 }} />
        {title}
      </Box>
      <Icon icon="akar-icons:arrow-back" style={{ fontSize: 20 }} />
    </Button>
  </motion.div>
)

export default ItemButton