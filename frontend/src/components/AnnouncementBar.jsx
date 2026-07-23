import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closed = sessionStorage.getItem("announcementClosed");
    if (closed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementClosed", "true");
  };

  if (!isVisible) {
    return null;
  }

  const blocks = [
    { icon: LocalShippingOutlinedIcon, text: "FREE SHIPPING ON ALL ORDERS ABOVE ₹1499" },
    { icon: ReplayOutlinedIcon, text: "EASY 14-DAY RETURNS" },
    { icon: VerifiedUserOutlinedIcon, text: "SECURE PAYMENT" },
    { icon: DiamondOutlinedIcon, text: "PREMIUM QUALITY" },
  ];

  // Track Component
  const Track = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {blocks.map((item, index) => {
        const Icon = item.icon;
        return (
          <Box
            key={index}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mx: 5,
              flexShrink: 0,
            }}
          >
            <Icon
              sx={{
                fontSize: 14,
                color: "#A58563",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: "8px", sm: "9px", md: "10px" },
                fontWeight: 500,
                letterSpacing: ".08em",
                color: "#D4C9B8",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: "#111",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: 38,
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        zIndex: 9999,
      }}
    >
      {/* Marquee Container */}
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          alignItems: "center",
          animation: "marquee 35s linear infinite",
          "@keyframes marquee": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: "translateX(-50%)",
            },
          },
        }}
      >
        <Track />
        <Box
          sx={{
            width: "12vw",
            flexShrink: 0,
          }}
        />
        <Track />
      </Box>

      {/* Close Button - X */}
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: { xs: 8, md: 24 },
          top: "50%",
          transform: "translateY(-50%)",
          color: "rgba(255,255,255,0.2)",
          padding: 0.5,
          zIndex: 10,
          "&:hover": {
            color: "#fff",
            bgcolor: "transparent",
          },
        }}
        size="small"
      >
        <CloseIcon sx={{ fontSize: 14 }} />
      </IconButton>
    </Box>
  );
}