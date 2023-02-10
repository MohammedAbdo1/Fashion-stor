import React from "react";
import "./IconicCreations.css";
import PoloSkeletonWatch from "./images/PoloSkeletonWatch.webp";
import FlyMeToTheMoonphase from "./images/FlyMeToTheMoonphase.jpg";
import VirtualTryOn from "./images/VirtualTryOn.jpg";
import PossessionRing2 from "./images/PossessionRing2.webp";
import PossessionRing from "./images/PossessionRing.webp";
import PoloDateWatch from "./images/PoloDateWatch.webp";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import IconButton2 from "@mui/joy/IconButton";


import { FavoriteBorder, Favorite } from "@mui/icons-material";
import {
  CardActionArea,
  CardMedia,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Checkbox,
} from "@mui/material";

const IconicCreations = () => {
  const prodect = [
    {
      id: 1,
      name: "Possession ring",
      img: PossessionRing,
      describe: "Rose Gold Diamond Ring Price varies",
      pric: "$ 2,260",
    },
    {
      id: 1,
      name: "Possession ring",
      img: PossessionRing2,
      describe: "Large model - Rose Gold Diamond Ring",
      pric: "$ 8,950",
    },
    {
      id: 1,
      name: "Piaget Polo Date watch",
      img: PoloDateWatch,
      describe: "Automatic Steel Diamond Watch",
      pric: "$ 21400",
    },
    {
      id: 1,
      name: "Piaget Polo Skeleton",
      img: PoloSkeletonWatch,
      describe: "Automatic Steel Diamond Watch",
      pric: "$ 30,900",
    },
  ];
  return (
    <Grid container>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <h3 className="title">Our iconic creations</h3>
      </Grid>
      {prodect.map((data) => (
        <Grid lg={3} md={4} sm={6} xs={6}>
          <Card className="iconicCreations">
            <CardActionArea>
              <CardOverflow>
                <CardMedia
                  component="img"
                  height="100%"
                  image={data.img}
                  alt="green iguana"
                />
                <IconButton
                  className="IconButton"
                  aria-label="Like minimal photography"
                  size="sm"
                  variant="solid"
                  color="danger"
                >
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </IconButton>
                <IconButton2
                  className="IconButton2"
                  size="sm"
                  variant="solid"
                  color="danger"
                >
                  <p>Novelty</p>
                </IconButton2>
              </CardOverflow>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data.name}
                </Typography>
                <Typography variant="body2" ffontSize="sm">
                  {data.describe}
                </Typography>
                <Typography gutterBottom variant="body3" fontSize={19}>
                  {data.pric}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}

      <Grid>
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
      </Grid>
    </Grid>
  );
};

export default IconicCreations;
