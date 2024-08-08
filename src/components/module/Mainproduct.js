"use client";
import React from "react";
import Slider from "react-slick";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Container,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Mainproduct({ products = [] }) {
  const topThreeProducts = products.slice(0, 3);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // فعال کردن تغییر خودکار اسلایدها
    autoplaySpeed: 2000,
  };

  return (
    <Container maxWidth="lg">
      <Typography
        display="flex"
        flexDirection="row"
        alignItems="center"
        variant="h4"
        gutterBottom
        sx={{ color: "#102C57", mr: "15px", fontWeight: 700 }}
      >
        <Image
          src="/images/proicon.jpg"
          alt="Description of image"
          width={80}
          height={80}
          style={{ borderRadius: "10px" }}
        />
        محصولات
      </Typography>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        p={0}
        maxWidth="1200px"
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
        }}
      >
        <Box
          mb={2}
          display="flex"
          justifyContent="center"
          width="100%"
          sx={{
            borderRadius: "15px",
            marginTop: "-40px",
            position: "relative",
          }}
        >
          <Image
            src="/images/mainpro.jpg"
            alt="Description of image"
            width={400}
            height={450}
            style={{ borderRadius: "10px" }}
          />
        </Box>
        <Box width="60%" sx={{ padding: 1 }}>
          <Slider {...settings}>
            {topThreeProducts.length > 0 ? (
              topThreeProducts.map((product) => (
                <Box
                  key={product.id}
                  p={1}
                  m={0}
                  display="flex"
                  justifyContent="center"
                >
                  <Card
                    sx={{
                      maxWidth: 300,
                      height: "100%",
                      padding: 1,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        height: "auto",
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "5px",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center", // Center horizontally
                        height: 190,
                        padding: 2,
                        margin: 0,
                        direction: "rtl",
                
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "600", textAlign: "center"  }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <LocalOfferIcon
                          color="green"
                          sx={{ color: "#708871" }}
                        />{" "}
                        قیمت:{product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))
            ) : (
              <Typography variant="body1">No products available</Typography>
            )}
          </Slider>

          <Button
            variant="contained"
            color="primary"
            href="/buy-resedential"
            style={{
              marginTop: "16px",
              transition: "background-color 0.3s",
            }}
            sx={{
              fontWeight: "550",
              mr: "12px",
              borderRadius: "18px",
              bgcolor: "#102C57",
              "&:hover": {
                bgcolor: "#DAC0A3",
              },
            }}
          >
            مشاهده همه محصولات
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Mainproduct;
