"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";

const disclaimerText = `
The information on the Website is provided solely for analysis purposes only and should not be construed as financial, investment, tax, or other advice.
Nothing on the Website or in our Services represents a solicitation, advice, endorsement, or offer to purchase or sell stocks or other financial instruments by 4XFUNDER, its agents, employees, contractors, or any connected entities.
You are solely responsible for assessing the benefits and risks associated with the use of any information or other content on the Website. All investments include substantial risk, and an individual's investment decisions are solely his/her obligation.
All information on the Website is provided “as is”, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied.
4XFUNDER, or its partners, employees, or agents, shall in no way be responsible to you or anyone else for any decision made or action taken in reliance on the information on the Website, or for any consequential, special, or similar damages, even if warned of the potential of such damages.
Purchases should not be regarded as deposits. All program charges are utilized for working expenses including, however not restricted to, staff, technology, and other business-related costs.
`;

const Disclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  const lines = disclaimerText
    .split("\n")
    .filter((line) => line.trim().length > 0);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: isSmall ? "100%" : "80%",
        textAlign: "center",
        bgcolor: "transparent",
        mx: "auto",
        mt: 4,
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          height: isExpanded ? `${contentHeight}px` : `${contentHeight / 2}px`,
          transition: "height 0.5s ease",
        }}
      >
        <Typography
          ref={contentRef}
          variant="body1"
          color="white"
          sx={{
            textAlign: "left",
            direction: "ltr",
            whiteSpace: "pre-wrap",
            lineHeight: 1.7,
            transition: "all 0.4s ease",
          }}
        >
          {isExpanded ? (
            disclaimerText
          ) : (
            <>
              <span>{lines[0]}</span>
              <br />
              <span
                style={{
                  filter: "blur(1px)",
                  opacity: 0.8,
                }}
              >
                {lines[1]}
              </span>
              <br />
              <span
                style={{
                  filter: "blur(3px)",
                  opacity: 0.5,
                }}
              >
                {lines[2]}...
              </span>
            </>
          )}
        </Typography>
      </Box>

      <Button
        onClick={handleToggle}
        endIcon={
          <Icon
            icon={
              isExpanded ? "solar:arrow-up-linear" : "solar:arrow-down-linear"
            }
            style={{ marginRight: 8 }}
          />
        }
        sx={{ mt: 2, color: "#00CC99", fontWeight: "bold" }}
        variant="text"
      >
        {isExpanded ? "بستن " : "بیشتر بخوانید"}
      </Button>
    </Box>
  );
};

export default Disclaimer;
