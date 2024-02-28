import { ChatBubbleOutlineOutlined, Check, LocationOnOutlined, PlayCircle, ShoppingBagOutlined, Verified, VerifiedOutlined } from "@mui/icons-material";
import { Grid, Box, Typography, Button, CardMedia, Card, CardContent, Stack, Divider, Avatar } from "@mui/material";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Text from "./utils/Text";
import SubscriptionModal from "./SubscriptionModal";
import Pricing from "./Pricing";

export default function Video() {
 const [showVideo, setShowVideo] = useState(false);
 const [videoVolume, setVideoVolume] = useState(0);
const [open, setOpen] = useState(false);
const handleContinue = (item) => {
  
  setOpen(true);
};
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
       
       sx={{ mb: "10px", display : { md: "block", lg: "block", xs: "none", sm: "none" } }}
       component={showVideo ? "iframe" : "img"}
       alt="Multimedia"
       height={showVideo ? "400px" : "auto"}
       width="100%"
       title="Multimedia"
       src={
         showVideo
           ? "https://www.youtube.com/embed/fAHC6grZURA?si=6K2nG9gKM6iOfyUG&autoplay=1&muted=1"
           : "/assets/images/stas.jpeg"
       }
       allowFullScreen={showVideo}
     />

     {/* mobile */}
     <CardMedia
       sx={{ mb: "10px", display : { md: "none", lg: "none", xs: "block", sm: "block" } }}
       component={showVideo ? "iframe" : "img"}
       alt="Multimedia"
       height={showVideo ? 230 : "auto"}
       width="100%"
       title="Multimedia"
       src={
         showVideo
           ? "https://www.youtube.com/embed/fAHC6grZURA?si=6K2nG9gKM6iOfyUG&autoplay=1&muted=1"
           : "/assets/images/stas.jpeg"
       }
       allowFullScreen={showVideo}
     />
     <Box display={{ xs: "block", md: "none", lg: "none", sm: "block" }} my={1}>
       <Stack spacing={1} direction="row" alignItems="center">
         <Avatar
           onClick={handleContinue}
           sx={{
             overflow: "hidden",
             width: { md: "80px", lg: "80px", xs: "25px", sm: "25px" },
             height: { md: "80px", lg: "80px", xs: "25px", sm: "25px" },
             position: "relative",
             border: "#76D14B solid 3px",
           }}
         >
           <video
             style={{
               position: "absolute",
               width: "100%",
               height: "100%",
             }}
             autoPlay
             loop
             muted
           >
             <source src="assets/videos/IMG_0964.MOV" type="video/mp4" />
             Your browser does not support the video tag.
           </video>
         </Avatar>
         <Box>
           <Text fw="bold" fs="14px" color="#000">
             Stas Sorokin
           </Text>
           <Stack
             display={{ md: "flex", sm: "none", xs: "none" }}
             direction={{ md: "row", lg: "row", sm: "column", xs: "column" }}
             spacing={{ md: 3, lg: 3, sm: 1, xs: 1 }}
             mt={1}
           >
             <Box display="flex" alignItems="center">
               <LocationOnOutlined sx={{ color: "#606060" }} />
               <Text>Israel</Text>
             </Box>
             <Box display="flex" alignItems="center">
               <ChatBubbleOutlineOutlined sx={{ color: "#606060" }} />
               <Text>I speak English, Russian</Text>
             </Box>
             <Box display="flex" alignItems="center">
               <ShoppingBagOutlined sx={{ color: "#606060" }} />
               <Text>114 orders completed</Text>
             </Box>
           </Stack>
         </Box>
       </Stack>
     </Box>
     <Box bgcolor="#002884" borderRadius={3} sx={{ mb: "20px" }} p={2}>
       <Text fs="18px" fw="600" color="#fff">
         Take 5% off your next order
       </Text>
       <Text fs="18px" fw="400" color="#fff" my="20px">
         Stas Sorokin choose to give you an exclusive coupon for their Gigs
       </Text>
       <Text
         fs="18px"
         fw="400"
         color="#fff"
         sx={{ cursor: "pointer", textDecoration: "underline" }}
         onClick={handleContinue}
       >
         Learn More
       </Text>
     </Box>

     <Typography
       display={{ md: "none", lg: "none", sm: "block", xs: "block" }}
       variant="h1"
       sx={{
         color: "#000",
         fontWeight: "bold",
         lineSpacing: "auto",
         lineHeight: {
           md: "40px",
           xs: "35px",
           sm: "35px",
           lg: "40px",
         },
         fontSize: {
           md: "32px",
           xs: "30px",
           sm: "30px",
           lg: "32px",
         },
         mb: "50px",
         textAlign: "left",
       }}
     >
       <Divider sx={{ mb: 2 }} />
       I will develop a chatgpt ai app, api, saas gpt web application, software
       developer.
       <Divider sx={{ mt: 2 }} />
     </Typography>
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
     <Box my={4} display={{ md: "none", lg: "none", sm: "block", xs: "block" }}>
       <Pricing />
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
       <Stack
         direction={{ md: "row", lg: "row", xs: "column", sm: "column" }}
         spacing={{ md: 10, lg: 10, sm: 2, xs: 2 }}
       >
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
     <SubscriptionModal open={open} setOpen={setOpen} />
   </>
 );
}
