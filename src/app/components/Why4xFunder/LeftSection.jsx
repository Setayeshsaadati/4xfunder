import { Box, Stack } from "@mui/material";
import { useState } from "react";
import ItemButton from "./ItemButton";
import Component1 from "./ItemsComponents/Component1";
import Component2 from "./ItemsComponents/Component2";
import Component3 from "./ItemsComponents/Component3";
import Component4 from "./ItemsComponents/Component4";
import Component5 from "./ItemsComponents/Component5";
import Component6 from "./ItemsComponents/Component6";

const LeftSection = ({ onSelect }) => {
  const items = [
    "دسترسی به سرمایه",
    "محیط ساختاریافته",
    "عدم مسئولیت شخصی",
    "ابزارها و منابع حرفه ای",
    "تقسیم سود",
    "کاهش ریسک سرمایه شخصی",
  ];
  const icons = [
    "mdi:home",
    "mdi:account",
    "mdi:cog",
    "mdi:chart-line",
    "mdi:star",
    "mdi:settings",
  ];
  const components = [
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box sx={{ width: "100%", padding: { xs: "0", md: "20px" } }}>
      <Stack spacing={1} >
        {items.map((item, index) => (
          <ItemButton
            key={item}
            title={item}
            isSelected={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(components[index]);
            }}
            icon={icons[index]}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LeftSection;
