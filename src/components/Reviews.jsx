import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Text from "./utils/Text";


export function Reviews() {
  var userReviews = [
    {
      name: "Smartsedge",
      image: "",
      rating: 4,
      content:
        "Appreciate the dedication of Stas in trying to find the needed solution. The team is still working on it.",
      reply: {
        name: "Seller's Response",
        content:
          "Thank you so much Joanna, I highly appreciate our work together, it looks like you will get the highest embeddings precision! I am fully dedicated to make this better then you even imagine! Thank you for our work together, and I am looking towards, future support and collaboration to provide you with the highest value",
      },
    },
    {
      name: "rhyscartwrightj",
      image: "",
      rating: 4,
      content: "Thanks",
    },
    {
      name: "kayalade",
      image: "",
      rating: 4.5,
      content: "Excellent Work",
      reply: {
        name: "Seller's Response",
        content:
          "Thank you, it's a pleasure working together and building your AI vision into reality.",
      },
    },
    {
      name: "sabreen2020",
      image: "",
      rating: 4.5,

      content: "Great Job, love the work",
      reply: {
        name: "Seller's Response",
        content: "Thank you, it's a real joy working together.",
      },
    },
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <Text fs="24px" fw="800" color="#000">
        Reviews
      </Text>
      {userReviews.map((item, index) => (
        <CardContent key={index}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Avatar title={item.name} />
            </Grid>
            <Grid item xs>
              <Text fs="18px" fw="600" color="#000">
                {item.name}
              </Text>
              <Rating value={item.rating} readOnly sx={{ color: "#606060" }} />
              <Text fs="18px" fw="400">
                {item.content}
              </Text>
            </Grid>
          </Grid>

          {item.reply?.name && <Box ml={4} mb={4}>
            <Box mt={4}>
              <Grid container alignItems="center" spacing={3} key={index}>
                <Grid item>
                  <Avatar title={item.reply?.name} />
                </Grid>
                <Grid item xs>
                  <Text fs="18px" fw="600" color="#000">
                    {item.reply?.name}
                  </Text>

                  <Text fs="16px" fw="400">
                    {item.reply?.content}
                  </Text>
                </Grid>
              </Grid>
            </Box>
          </Box>}
           <Divider  />
        </CardContent>
      ))}
    </Box>
  );
}


