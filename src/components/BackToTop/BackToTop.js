import React from "react";
import { CardContent, Card } from "@mui/material";
import { KeyboardControlKey } from "@mui/icons-material";
import "./backToTop.css";
const BackToTop = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Card className="backToTop" onClick={handleBackToTop}>
      <KeyboardControlKey  className="KeyboardControlKey"/>
      <CardContent className="text">BackToTop</CardContent>
    </Card>
  );
};
export default BackToTop;
