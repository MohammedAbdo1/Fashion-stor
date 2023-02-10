import React from "react";
import "./HomeJewelry.css";
import JewelryMain from "./images/jewelryMain.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const HomeJewelry = () => {
  return (
    <Card className="homejewelry">
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
  
          image={JewelryMain}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jewelry
          </Typography>
          <Typography variant="body2" fontSize={19}>
            Piaget jewelry represents the Swiss Maison’s precious expertise in
            luxury jewelry materials
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="btnWatch" size="small" color="primary">
          SHOP ALL JEWELRY
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomeJewelry;
