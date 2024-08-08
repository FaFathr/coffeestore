import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import SubdirectoryArrowLeftOutlinedIcon from "@mui/icons-material/SubdirectoryArrowLeftOutlined";
import Link from "next/link";
function BuyresidentialsPage({ products }) {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {products.map((product) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={product.id}
          display="flex"
          justifyContent="center"
        >
        <Link href={`/buy-resedential/${product.id}`}>
          <Card sx={{ maxWidth: 345, mt: "12px" }}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ width: "100%", height: "850px" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "500", color: "#102C57" }}
              >
                <SubdirectoryArrowLeftOutlinedIcon sx={{ color: "#667BC6" }} />{" "}
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", color: "#102C57" }}
              >
                <LocalOfferIcon sx={{ color: "#708871" }} /> قیمت:{" "}
                {product.price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", color: "#102C57" }}
              >
                🥤 نوع: {product.type}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", color: "#102C57" }}
              >
                ⚡️ میزان کافئین: {product.caffeineContent}mg
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", color: "#102C57" }}
              >
                ☕️ نوع قهوه: {product.coffeeVariety}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "18px", fontWeight: "400", color: "#102C57" }}
              >
                <LocalCafeOutlinedIcon sx={{ color: "#6F4E37" }} /> مواد تشکیل
                دهنده: {product.ingredients.join(", ")}
              </Typography>
              <Button
                href="/Details"
                color="primary"
                sx={{
                  fontWeight: "400",
                  mr: "12px",
                  mt: "10px",
                  color: "#fff",
                  borderRadius: "8px",
                  bgcolor: "#102C57",
                  "&:hover": {
                    bgcolor: "#DAC0A3",
                  },
                }}
              >
                دیدن جزییات محصول
              </Button>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default BuyresidentialsPage;
