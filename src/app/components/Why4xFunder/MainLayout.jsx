"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import RightSection from "./LeftSection";
import LeftSection from "./RifhtSection";
import Component1 from "./ItemsComponents/Component1";

const MainLayout = () => {
  const [SelectedComponent, setSelectedComponent] = useState(() => Component1);

  const handleSelect = (component) => {
    setSelectedComponent(() => component);
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        maxWidth: "1400px",
      }}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid size={{ xs: 12, md: 5 }}>
        <RightSection onSelect={handleSelect} />
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <LeftSection selectedComponent={<SelectedComponent />} />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
