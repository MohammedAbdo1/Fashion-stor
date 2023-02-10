import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FlyMeToTheMoonphase from "./images/FlyMeToTheMoonphase.jpg";
import VirtualTryOn from "./images/VirtualTryOn.jpg";

import "./IconicCreations.css";
export const S = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          border: 0,
          margin: 3,
          marginLeft: 5,
          marginBottom: -3,
          display: "flex",
          flexDirection: { md: "row", sm: "row", xs: "column" },
        }}
      >
        <CardMedia
          height="100%"
          component="img"
          alt="Beside Myself album cover"
          src={VirtualTryOn}
          sx={{ width: { md: "50%", sm: "50%", sx: "100%" } }}
        />
        <Box
          sx={{
            width: { md: "50%", sm: "50%", sx: "100%" },
            textAlignLast: "center",
            alignSelf: "center",
            px: { xs: 0, sm: 2 },
            ml: { lg: 4 },
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight={600}
            sx={{
              mb: 3,
              textAlign: { xs: "center", sm: "start" },
              mt: { xs: 1.5, sm: 0 },
            }}
          >
            Virtual Try-On
          </Typography>
          <Typography
            component="div"
            color="text.secondary"
            fontWeight={500}
            sx={{ textAlign: { xm: "center", sm: "start" }, mb: 3 }}
          >
            Want to know how the Piaget Polo watch fits you? Try it on your
            wrist thanks to our unique Virtual Try-On tool.
          </Typography>
          <CardActions>
            <Button className="btnWatch" size="small">
              TRY-ON
            </Button>
          </CardActions>
        </Box>
      </Card>
      <Card
        variant="outlined"
        sx={{
          border: 0,
          margin: 3,
          marginLeft: 5,
          marginBottom: -3,
          display: "flex",
          flexDirection: { md: "row", sm: "row", xs: "column" },
        }}
      >
        <CardMedia
          component="img"
          alt="Beside Myself album cover"
          src={FlyMeToTheMoonphase}
          sx={{ width: { md: "50%", sm: "50%", sx: "100%" } }}
        />
        <Box
          sx={{
            width: { md: "50%", sm: "50%", sx: "100%" },
            textAlignLast: "center",
            alignSelf: "center",
            px: { xs: 0, sm: 2 },
            ml: { lg: 4 },
          }}
        >
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight={600}
            sx={{
              mb: 3,
              textAlign: { xs: "center", sm: "start" },
              mt: { xs: 1.5, sm: 0 },
            }}
          >
            Virtual Try-On
          </Typography>
          <Typography
            component="div"
            color="text.secondary"
            fontWeight={500}
            sx={{ textAlign: { xm: "center", sm: "start" }, mb: 3 }}
          >
            Want to know how the Piaget Polo watch fits you? Try it on your
            wrist thanks to our unique Virtual Try-On tool.
          </Typography>
          <CardActions>
            <Button className="btnWatch" size="small">
              TRY-ON
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
};

export default S;
