import React from "react";
import "./HomeWatch.css";
import WatchMain from "./images/watchMain.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardOverflow from "@mui/joy/CardOverflow";

import { Button, CardActionArea, CardActions } from "@mui/material";
const HomeWatch = () => {
  return (
    <Card className="homewatch" lg={6} md={6} sm={12} xs={12}>
      <CardActionArea>
        <CardOverflow>
          <CardMedia
            component="img"
            height="100%"
            image={WatchMain}
            alt="green iguana"
          />
        </CardOverflow>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Watches
          </Typography>
          <Typography variant="body2" fontSize={19}>
            More than 140 years of innovation have made the Maison one of the
            world's most prestigious watchmaker-jewelers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="btnWatch" size="small">
          SHOP ALL WATCHES
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeWatch;
