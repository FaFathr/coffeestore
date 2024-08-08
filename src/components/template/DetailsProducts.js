
import React from "react";
import {
  Box,
  Card,
  Container,
  Typography,
  Button,
  Rating,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SubdirectoryArrowLeftOutlinedIcon from "@mui/icons-material/SubdirectoryArrowLeftOutlined";

function DetailsProducts({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }
  
  return (
    <Container maxWidth="lg" dir="rtl">
      
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          bgcolor: "#F1E5D1",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(111, 78, 55, 0.3)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "1px 8px 25px rgba(111, 78, 55, 0.5)",
          },
        }}
      >
        <Box
          sx={{
            flex: "0 0 60%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "18px",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
              maxHeight: { xs: 300, md: 300 },
              maxWidth: { xs: 300, md: 300 },
              borderRadius: "5px",
              marginBottom: "40px",
              marginTop: "24px",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.18)",
              },
            }}
            alt={product.name}
            src={product.image}
          />
    
           
          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "#102C57",
              }}
            >
              <SubdirectoryArrowLeftOutlinedIcon
                sx={{ color: "#667BC6", marginRight: "8px" }}
              />
              {product.name}
            </Typography>
          </Card>

          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: "500", color: "#102C57", marginBottom: "10px" }}
            >
              🥤 نوع: {product.type}
            </Typography>
          </Card>

          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: "500", color: "#102C57", marginBottom: "10px" }}
            >
              ⚡️ میزان کافئین: {product.caffeineContent}mg
            </Typography>
          </Card>

          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: "500", color: "#102C57", marginBottom: "10px" }}
            >
              ☕️ نوع قهوه: {product.coffeeVariety}
            </Typography>
          </Card>

          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: "500", color: "#102C57", marginBottom: "10px" }}
            >
              <LocalCafeOutlinedIcon
                sx={{ color: "#6F4E37", marginRight: "8px" }}
              />
              مواد تشکیل‌دهنده: {product.ingredients.join(", ")}
            </Typography>
          </Card>
        </Box>
        <Box
          sx={{
            flex: "0 0 40%",
            padding: "20px",
          }}
        >
          <Card
            sx={{
              bgcolor: "#DAC0A3",
              width: "100%",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{ fontWeight: "500", color: "#102C57", marginBottom: "10px" }}
            >
              <LocalOfferIcon sx={{ color: "#708871", marginRight: "8px" }} />
              قیمت: {product.price} تومان
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                bgcolor: "#102C57",
                "&:hover": {
                  bgcolor: "#A79277",
                },
              }}
            >
              اضافه به سبد خرید
            </Button>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default DetailsProducts;
