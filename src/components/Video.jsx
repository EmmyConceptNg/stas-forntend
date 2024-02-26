import { Check, PlayCircle, Verified, VerifiedOutlined } from "@mui/icons-material";
import { Grid, Box, Typography, Button, CardMedia, Card, CardContent, Stack } from "@mui/material";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Text from "./utils/Text";

export default function Video() {
 const [showVideo, setShowVideo] = useState(false);
 const [videoVolume, setVideoVolume] = useState(0);

 const handlePlayClick = () => {
   setVideoVolume(1);
 };

 const handleHideButtonClick = () => {
   setShowVideo(false);
 };

 // UseEffect to toggle the video after 5 seconds
 React.useEffect(() => {
   const timeoutId = setTimeout(() => {
     setShowVideo(true);
   }, 5000);

   // Clear the timeout to avoid memory leaks
   return () => clearTimeout(timeoutId);
 }, []);

 React.useEffect(() => {
   // Autoplay the video after 5 seconds
   if (showVideo) {
     const videoElement = document.getElementById("video");
     if (videoElement) {
       videoElement.play();
     }
   }
 }, [showVideo]);


 const [showAll, setShowAll] = useState(false)

 const handleReadMore = () =>{
  setShowAll(!showAll);
 }

 return (
   <>
     <CardMedia
       sx={{ mb: "50px" }}
       component={showVideo ? "video" : "img"}
       alt="Multimedia"
       height="100%"
       width="100%"
       controls={showVideo}
       muted={!videoVolume}
       volume={videoVolume}
       id="video" // add id to reference the video element
       src={
         showVideo ? "/assets/videos/IMG_0964.MOV" : "/assets/images/stas.jpeg"
       }
     />
     {showVideo && (
       <Box
         display={videoVolume === 1 ? "none" : "block"}
         position="absolute"
         top={{ md: "57%", xs: "50%", sm: "50%" }}
         left={{ md: "33%", xs: "36%", sm: "45%" }}
         transform="translate(-50%, -50%)"
       >
         <Button onClick={handlePlayClick} color="error">
           <PlayCircle sx={{ fontSize: "100px" }} />
         </Button>
       </Box>
     )}
     <Box>
       <Text fs="18px" fw="600" color="#000">
         Expert Software Development Full Stack Lead Engineer
       </Text>
       {!showAll ? (
         <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
           Welcome! I'm Stas Sorokin with over 9 years of experience in the tech
           industry, including work with leading organizations. Specializing in
           front-end, back-end, native, and mobile development, I've honed a
           diverse skill set to meet your unique needs. My record of 50+
         </Text>
       ) : (
         <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
           Welcome! I'm Stas Sorokin with over 9 years of experience in the tech
           industry, including work with leading organizations. Specializing in
           front-end, back-end, native, and mobile development, I've honed a
           diverse skill set to meet your unique needs. My record of 50+
           positive reviews underscores commitment, quality, speed, and clean
           code. I believe in putting the client at the center of everything I
           do. From our initial consultation to the final delivery, you will get
           a high-standard service that exceeds your expectations. Let's
           collaborate together to turn your ideas into a digital reality!
         </Text>
       )}
       {showAll ? (
         <Text
           fs="18px"
           fw="600"
           color="#000"
           sx={{
             textDecoration: "underline",
             cursor: "pointer",
           }}
           onClick={handleReadMore}
         >
           Read Less
         </Text>
       ) : (
         <Text
           fs="18px"
           fw="600"
           color="#000"
           sx={{
             textDecoration: "underline",
             cursor: "pointer",
           }}
           onClick={handleReadMore}
         >
           Read More
         </Text>
       )}
     </Box>
     <Box
       mt={5}
       p={4}
       border="1px solid #606060"
       borderRadius="15px"
       display="flex"
       flexDirection="row"
       justifyContent="space-between"
     >
       <Box>
         <Text fs="18px" fw="600" color="#000" mb="10px">
           Expert Software Development Full Stack Lead Engineer
         </Text>
         {[
           "Hand-picked freelancer",
           "High-quality work",
           "Experienced with businesses",
         ].map((item, index) => (
           <Stack spacing={3} key={index} direction="row">
             <Check />
             <Text fs="16px" fw="400" color="#606060">
               {item}
             </Text>
           </Stack>
         ))}
       </Box>
     </Box>
     <Box mt={5}>
       <Text fs="18px" fw="600" color="#000" mb="10px">
         Expert in:
       </Text>
       <Stack direction="row" spacing={10}>
         {["Software Development", "Website Development"].map((item, index) => (
           <Stack spacing={3} key={index} direction="row">
             <Verified color="primary" />
             <Text fs="16px" fw="400" color="#606060">
               {item}
             </Text>
           </Stack>
         ))}
       </Stack>
     </Box>
   </>
 );
}
