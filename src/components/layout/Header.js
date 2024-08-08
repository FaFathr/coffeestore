
// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Link from "next/link";
// import { AppBar, Box, Container, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
// function Header() {
//   return (
// <header >
// <AppBar
//     position="sticky"
//         sx={{
//           backgroundColor: "#FEFAF6",
//           direction: "rtl",
//           backgroundImage: `url(/images/backbanner.jpg)`,
//           borderRadius:"4px"
//         }}
//       >
//         <Container maxWidth="lg">
//           <Toolbar>
//             <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
//               <TextField
//                 variant="outlined"
//                 placeholder="search..."
//                 size="small"
//                 sx={{ bgcolor: "#FEFAF6 ", borderRadius: 1, mr: 1 }} // Margin-right for spacing
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon sx={{ color: "#102C57" }} />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Box>

//             <Box
//               display="flex"
//               alignItems="center"
//               sx={{ flexGrow: 2, justifyContent: "center", ml: 30 }}
//             >
//               <Typography
//                 component="h1"
//                 variant="h5"
//                 fontWeight="bold"
//                 sx={{ textAlign: "center", mr: 2, color: "#102C57" }}
//               >
//                 Bonmano
//               </Typography>
//               <img
//                 src="/images/imgheader.jpg"
//                 alt="Bonmano Logo"
//                 style={{
//                   height: "40px",
//                   marginRight: "8px",
//                   borderRadius: "10px",
//                 }}
//               />
//             </Box>

//             <Box display="flex" alignItems="center">
//               <Link href="/signup">
//                 {" "}
//                 <AccountCircleIcon sx={{ ml: 2, color: "#102C57" }} />
//               </Link>
//               <Link href="/">
//                 <ShoppingCartIcon sx={{ ml: 2, color: "#102C57" }} />
//               </Link>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
// </header>
//   )
// }

// export default Header
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

import Search from "../template/Search";

function Header() {
  return (
    <header>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#FEFAF6",
          direction: "rtl",
          backgroundImage: `url(/images/backbanner.jpg)`,
          borderRadius: "4px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Search/>

            <Box
              display="flex"
              alignItems="center"
              sx={{ flexGrow: 2, justifyContent: "center", ml: 30 }}
            >
              <Typography
                component="h1"
                variant="h5"
                fontWeight="bold"
                sx={{ textAlign: "center", mr: 2, color: "#102C57" }}
              >
                Bonmano
              </Typography>
              <img
                src="/images/imgheader.jpg"
                alt="Bonmano Logo"
                style={{
                  height: "40px",
                  marginRight: "8px",
                  borderRadius: "10px",
                }}
              />
            </Box>

            <Box display="flex" alignItems="center">
              <Link href="/signup">
                {" "}
                <AccountCircleIcon sx={{ ml: 2, color: "#102C57" }} />
              </Link>
              <Link href="/">
                <ShoppingCartIcon sx={{ ml: 2, color: "#102C57" }} />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
