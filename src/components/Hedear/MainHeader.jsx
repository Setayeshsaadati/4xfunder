"use client"
import { Grid, Box, useMediaQuery } from "@mui/material"
import RightSide from "./RightSide"
import Menu from "./Menu"
import LeftSide from "./LeftSide"
import { Icon } from "@iconify/react"
import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Image from "next/image"

const navItems = ["صفحه اصلی", "موفقیت", "چالش ها", "وبلاگ"]

const MainHeader = () => {
  const isMobile = useMediaQuery("(max-width:900px)")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const handleToggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <Box  mt={3} mb={2} px={2}>
      {!isMobile ? (
        <Grid container >
          <Grid size={{ xs: 12, md: 4 }}>
            <RightSide />
          </Grid>
          <Grid size={{ xs: 12, md: 4}}>
            <Menu />
          </Grid>
          <Grid  size={{ xs: 12, md: 4 }}>
            <LeftSide />
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center" justifyContent="space-between" >
          <Grid >
            <Box onClick={handleToggleDrawer} sx={{ cursor: "pointer" }}>
              <Icon
                icon="solar:hamburger-menu-linear"
                color="#fff"
                width={28}
                height={28}
              />
            </Box>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleToggleDrawer}
              PaperProps={{
                sx: { bgcolor: "#121212", color: "#fff" },
              }}
            >
              <List>
                {navItems.map((text, index) => (
                  <ListItem disablePadding key={index}>
                    <ListItemButton onClick={handleToggleDrawer}>
                      <ListItemText
                        primary={text}
                        sx={{ textAlign: "right" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Grid>
          <Grid >
            <Image src="/images/Logo.png" width={48} height={41} alt="logo" />
          </Grid>
          <Grid >
            <Box
              bgcolor="#00CC99"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ width: 35, height: 35, cursor: "pointer" }}
            >
              <Icon
                icon="solar:user-linear"
                color="#fff"
                width={24}
                height={24}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  )
}

export default MainHeader
