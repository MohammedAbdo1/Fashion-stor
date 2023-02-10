import React from "react";
import video from "./vid.mp4";
import "./Video.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
const Videotop = () => {
  const handleiconpdown = () => {
    window.scrollTo({
      left: 0,
      top: 600,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="title-video">
        استمتعوا بخدمة التوصيل المجاني لجميع الطلبات المقدمة عبر الهاتف على
        <a href="tel:+967775163208">+967775163208</a>
      </div>
      <div className="video">
        <Box
          component="ul"
          sx={{ display: "flex", gap: 2, flexWrap: "wrap", p: 0, m: 0 }}
        >
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1, height: 500 }}>
            <CardCover>
              <video autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </CardCover>
            <CardContent>
              <Typography
                level="h6"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Video
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </div>
      <div className="iconpdown" onClick={handleiconpdown}>
        <ExpandMore fontSize="large" />
      </div>
    </>
  );
};

export default Videotop;
