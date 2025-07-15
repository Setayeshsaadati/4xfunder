"use client"

import { Box, Stack } from "@mui/material"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ItemButton from "./ItemButton"
import Component1 from "./ItemsComponents/Component1"
import Component2 from "./ItemsComponents/Component2"
import Component3 from "./ItemsComponents/Component3"
import Component4 from "./ItemsComponents/Component4"
import Component5 from "./ItemsComponents/Component5"
import Component6 from "./ItemsComponents/Component6"

const LeftSection = ({ onSelect }) => {
  const items = [
    "دسترسی به سرمایه",
    "محیط ساختاریافته",
    "عدم مسئولیت شخصی",
    "ابزارها و منابع حرفه ای",
    "تقسیم سود",
    "کاهش ریسک سرمایه شخصی",
  ]
  const icons = [
    "mdi:home",
    "mdi:account",
    "mdi:cog",
    "mdi:chart-line",
    "mdi:star",
    "mdi:settings",
  ]
  const components = [
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [visibleIndex, setVisibleIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerPoint = 180
      const calculatedIndex = Math.min(
        items.length,
        Math.floor(scrollY / triggerPoint) + 2
      )
      setVisibleIndex(calculatedIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Box sx={{ width: "100%", padding: { xs: "0", md: "20px" } }}>
      <Stack spacing={2} alignItems="center">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: index < visibleIndex ? 1 : 0,
              x: index < visibleIndex ? 0 : 50,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            style={{ width: "100%", maxWidth: 320 }}
          >
            <ItemButton
              title={item}
              isSelected={index === selectedIndex}
              onClick={() => {
                setSelectedIndex(index)
                onSelect(components[index])
              }}
              icon={icons[index]}
            />
          </motion.div>
        ))}
      </Stack>
    </Box>
  )
}

export default LeftSection
