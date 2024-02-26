import { Grid, Box, Typography,  Stack, Avatar } from "@mui/material";



import { useNavigate } from "react-router-dom";

import { Typewriter } from "react-simple-typewriter";
import Text from "./utils/Text";
import { ChatBubbleOutlineOutlined, LocationOn, LocationOnOutlined, ShoppingBagOutlined } from "@mui/icons-material";

export default function Hero() {

 
    
    const title= ['I will develop a chatgpt ai app, api, saas gpt web application, software developer.']
  return (
        <Box sx={{  my: 4 }}>
          <Typography
            variant="h1"
            sx={{
              color: "#000",
              fontWeight: "bold",
              lineSpacing: "auto",
              lineHeight: {
                md: "40px",
                xs: "40px",
                sm: "40px",
                lg: "40px",
              },
              fontSize: {
                md: "32px",
                xs: "24px",
                sm: "24px",
                lg: "32px",
              },
              mb: 3,
              textAlign: {
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typewriter loop={false} words={title} cursor />
          </Typography>

          <Box>
            <Stack spacing={3} direction="row" alignItems="center">
              <Avatar
                sx={{
                  overflow: "hidden",
                  width: "100px",
                  height: "100px",
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
                <Text fw="800" fs="24px" color="#000">
                  Stas Sorokin{" "}
                </Text>
                <Stack direction={"row"} spacing={3} mt={1}>
                  <Box display="flex" alignItems="center">
                    <LocationOnOutlined sx={{ color : '#606060'}} />
                    <Text>Israel</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <ChatBubbleOutlineOutlined  sx={{ color : '#606060'}}/>
                    <Text>I speak English, Russian</Text>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <ShoppingBagOutlined sx={{ color : '#606060'}} />
                    <Text>114 orders completed</Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      
  );
}
