import React from "react";
import ReturnsAndExchanges from "./images/ReturnsAndExchanges.svg";
import SecuredPayment from "./images/SecuredPayment.svg";
import ComplimentaryShipping from "./images/ComplimentaryShipping.svg";
import ContactUs from "./images/ContactUs.svg";
import "./Infromtion.css";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
const Infromtion = () => {
  const infromtion = [
    {
      id: 1,
      img: ContactUs,
      name: "Contact us",
      describe:
        "Order a creation or receive personalized advice from one of our Piaget ambassador.Contact us",
    },
    {
      id: 2,
      img: ComplimentaryShipping,
      name: "Complimentary shipping",
      describe:
        "We offer delivery on all Piaget orders within an estimated 4 to 6 business days.",
    },
    {
      id: 3,
      img: SecuredPayment,
      name: "Secured payment",
      describe:
        "Safe payment via credit cards, Affirm Financing, Paypal, Google Pay, Apple Pay, Alipay and Wechat Pay.",
    },
    {
      id: 4,
      img: ReturnsAndExchanges,
      name: "Returns and exchanges",
      describe:
        "Purchases may be returned or exchanged within 30 days in the US.",
    },
  ];

  return (
    <>
      <Grid container>
        {infromtion.map((data) => (
          <Grid lg={3} md={3} sm={6} xs={12}>
            <Card className="infromtion">
              <CardMedia
                sx={{ width: 30 }}
                component="img"
                className="image"
                image={data.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {data.name}
                </Typography>
                <Typography
                  variant="body2"
                  fontSize="sm"
                  marginBottom={5}
                  paddingLeft={5}
                  paddingRight={5}
                >
                  {data.describe}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Infromtion;
