import { Grid, Box, Typography,  Stack, Avatar } from "@mui/material";



import { useNavigate } from "react-router-dom";

import { Typewriter } from "react-simple-typewriter";
import Text from "./utils/Text";
import { ChatBubbleOutlineOutlined, LocationOn, LocationOnOutlined, ShoppingBagOutlined } from "@mui/icons-material";
import SubscriptionModal from "./SubscriptionModal";
import { useState } from "react";

export default function Hero() {
    
  const [open, setOpen] = useState(false);
  const handleContinue = (item) => {
    setOpen(true);
  };
  return (
    <>
      <Box sx={{ my: 4 }}>
        
        <Typography
          display={{ md: "block", lg: "block", sm: "none", xs: "none" }}
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
              md: "36px",
              xs: "24px",
              sm: "24px",
              lg: "36px",
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
          I will develop a chatgpt ai app, api, saas gpt web application,
          software developer.
        </Typography>

        <Box display={{ xs : 'none', md :'block', lg : 'block', sm :'none'  }}>
          <Stack spacing={3} direction="row" alignItems="center">
            <Avatar
              onClick={handleContinue}
              sx={{
                overflow: "hidden",
                width: { md: "80px", lg: "80px", xs: "45px", sm: "45px" },
                height: { md: "80px", lg: "80px", xs: "45px", sm: "45px" },
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
              <Text fw="bold" fs="24px" color="#000">
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
      </Box>

      <SubscriptionModal open={open} setOpen={setOpen} />
    </>
  );
}
