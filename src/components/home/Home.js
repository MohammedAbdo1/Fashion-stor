import React from "react";
import Grid from "@mui/material/Grid";
import HomeWatch from "../watchs/HomeWatch";
import HomeJewelry from "../jewelrys/HomeJewelry";
import ShopCategory from "../shopCategory/ShopCategory";
import IconicCreations from "../iconicCreations/IconicCreations";
import OurUniqueExpertise from "../OurUniqueExpertise/OurUniqueExpertise";
import BackToTop from "../BackToTop/BackToTop";
import Infromtion from "../Infromtion/Infromtion";
import Footer from "../footer/Footer";
const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <HomeWatch />
      </Grid>
      <Grid lg={6} md={6} sm={12} xs={12}>
        <HomeJewelry />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <ShopCategory />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <IconicCreations />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <OurUniqueExpertise />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <BackToTop />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <Infromtion />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <BackToTop />
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
      <Footer />
      </Grid>
      
    </Grid>
  );
};

export default Home;
