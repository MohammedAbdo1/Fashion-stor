import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import ProductCard from "./product-card";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FlexBetween } from "./common/flex-space";
import { FlexRow } from "./common/flex-row";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1500 },
    items: 5.5,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 830 },
    items: 3.5,
  },
  mobile: {
    breakpoint: { max: 830, min: 580 },
    items: 2.5,
  },
  minMoblie: {
    breakpoint: { max: 580, min: 450 },
    items: 2,
  },
  xminMoblie: {
    breakpoint: { max: 450, min: 0 },
    items: 1.5,
  },
};
function ProductsSlider(props: any) {
  const { data, title, type } = props;
  const { t } = useTranslation("");
  const router = useRouter();
  const { locale } = router;

  return (
    <Box>
      <FlexBetween mb={1}>
        <FlexRow>
          <Avatar
            src="/images/star.png"
            sx={{ width: 80, height: 80, ml: -3, mb: -2.5 }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }} color="primary">
            {title}
          </Typography>
        </FlexRow>
        <Box>
          <Link href="/categories" passHref legacyBehavior>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
              color="primary"
            >
              {t("home.Show All")}{" "}
              {locale == "en" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            </Typography>
          </Link>
        </Box>
      </FlexBetween>
      <Carousel responsive={responsive}>
        {data?.products?.map((item: any, i: number) => (
          <ProductCard
            key={i}
            item={{
              discount:
                type == "event" ? item?.discount : item?.discountPercentage,
              name: type == "event" ? item?.product?.name : item?.name,
              arabicName:
                type == "event" ? item?.product?.arabicName : item?.arabicName,
              orginalPrice: type == "event" ? item?.orginalPrice : item?.price,
              image:
                type == "event"
                  ? item?.product?.productImages[0]?.link
                  : item?.productImages?.filter(
                      (img: any) => img?.primary == true
                    )[0]?.link || "",
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default ProductsSlider;
