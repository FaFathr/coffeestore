// import React from "react";
// import { Box, Container } from "@mui/material";

// function MainVideo() {
//   return (
//     <Container>
//       <Box
//         mt={2} // فاصله از بالا
//         mx="auto"
//         sx={{
//           borderRadius: "15px",
//           overflow: "hidden",
//           position: "relative",
//           paddingBottom: "56.25%",
//           height: 0,
//           //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//         }}
//       >
//         <video
//           width="100%"
//           height="auto"
//           autoPlay
//           loop
//           muted
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//           }}
//         >
//           <source src="/videos/video.mp4" type="video/mp4" />
//         </video>
//       </Box>
//     </Container>
//   );
// }

// export default MainVideo;
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

function MainVideo() {
  return (
    <Container>
      <Box
        mt={2} // فاصله از بالا
        mx="auto"
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h5" gutterBottom>
          <br/>راهنمای دم‌آوری قهوه
          برای علاقه‌مندان به قهوه که می‌خواهند فنجان قهوه بهتری را در خانه دم‌آوری کنند. باریستاهای ما، انواع روش‌ها با هر دم‌افزاری که فکرش را بکنید آموزش دادند تا یک قهوه باکیفیت دقیقا همان‌طوری که دوست دارید دم‌آوری کنید.
          </Typography>
          <Button variant="contained" color="primary">
         بیشتر ببینید
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default MainVideo;
