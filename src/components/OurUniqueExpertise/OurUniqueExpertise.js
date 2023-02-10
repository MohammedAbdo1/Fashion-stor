import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { ChevronRight, KeyboardControlKey } from "@mui/icons-material";
import GemSetting from "./images/GemSetting.jpg";
import GoldExpression from "./images/GoldExpression.jpg";
import UltraThin from "./images/UltraThin.jpg";
import "./OurUniqueExpertise.css";

const OurUniqueExpertise = () => {
  const pro = [
    {
      id: 1,
      img: GemSetting,
      name: "Gem-setting",
      describe:
        "Formed over millions of years ago and as rare as they are beautiful, precious stones are honored by our craftsmen, who display them in exceptional jewelry pieces and luxury watches.",
    },
    {
      id: 2,
      img: GoldExpression,
      name: "Gold expression",
      describe:
        "Piaget's goldsmiths have designed gold jewelry and watches than reach new heights of beauty and mastery.",
    },
    {
      id: 3,
      img: UltraThin,
      name: "Ultra-thin",
      describe: "Extra-thin watches emblematic of Piaget’s aesthetic purity.",
    },
  ];

  return (
    <>
      <Grid container marginTop="100px">
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Typography
            gutterBottom
            variant="h5"
            name="title"
            component="div"
            textAlign="center"
          >
            Our unique expertise
          </Typography>
        </Grid>
        {pro.map((data) => (
          <Grid lg={4} md={6} sm={12} xs={12}>
            <Card className="OurUniqueExpertise">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100%"
                  image={data.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" fontSize="sm" marginBottom={2}>
                    {data.describe}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body3"
                    marginBottom={200}
                    marginTop="30px"
                    fontSize={19}
                  >
                    READ THE ARTICLE <ChevronRight />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid md={12} sm={12} xs={12}>
          <Card className="boxText">
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                marginBottom={3}
              >
                Where luxury watches and luxury jewelry meet
              </Typography>
              <Typography
                variant="body2"
                fontSize="sm"
                fontSize={18}
                marginBottom={1}
              >
                Since 1874, Piaget has been crafting luxury watches and luxury
                jewelry treasures by blending a jeweler’s refinement with its
                watchmaking sophistication. Within this unique savoir-faire
                resides the Piaget secret to fine jewelry making. Nearly a
                hundred crafts performed side by side at the heart of the....
              </Typography>
              <a href="#" color="#000">
                <Typography gutterBottom variant="body3" fontSize={19}>
                  See more....
                </Typography>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default OurUniqueExpertise;
