"use client";

import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { RotatingTriangles } from "react-loader-spinner";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نمی‌باشد");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
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
          ثبت نام
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="تکرار رمز عبور"
            placeholder="رمز عبور خود را دوباره وارد نمایید"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
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
            onClick={signupHandler}
            type="submit"
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
              "ثبت نام"
            )}
          </Button>
        </Box>
        <Box>
          <p>
            حساب کاربری دارید؟
            <Link href="/signin">ورود</Link>
          </p>
        </Box>
        <Toaster />
      </Box>
    </Container>
  );
}

export default SignupPage;
