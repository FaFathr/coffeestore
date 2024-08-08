"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RotatingTriangles } from "react-loader-spinner";
import { signIn } from "next-auth/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs" dir="rtl">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "#DAC0A3",
          borderRadius: "8px",
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          backgroundImage: `url(/images/signupbackground.jpg)`,
        }}
      >
        <Typography component="h1" variant="h5">
          ورود
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="ایمیل"
            placeholder="ایمیل خود را وارد نمایید"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#6F4E37",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#1A2130" },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#6F4E37",
                },
              },
            }}
            InputLabelProps={{
              style: { color: "#1A2130" },
            }}
          />
          <Button
            type="submit"
            onClick={signinHandler}
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#3F2305",
              "&:hover": {
                bgcolor: "#6F4E37",
              },
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={loading}
          >
            {loading ? (
              <RotatingTriangles
                visible={true}
                height="35"
                width="35"
                color="#ffffff"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{ position: "absolute" }}
                wrapperClass=""
              />
            ) : (
              "ورود"
            )}
          </Button>
        </Box>
        <Box>
          <p>
            حساب کاربری ندارید؟
            <Link href="/signup">ثبت نام</Link>
          </p>
        </Box>
        <Toaster />
      </Box>
    </Container>
  );
}

export default SigninPage;
