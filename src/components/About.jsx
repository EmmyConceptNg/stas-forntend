import { Grid, Box, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Text from "./utils/Text";
import { useState } from "react";

export default function About() {

     const [showAll, setShowAll] = useState(false);

     const handleReadMore = () => {
       setShowAll(!showAll);
     };
  return (
    <>
      <Box mt={5}>
        <Box>
          <Text fs="24px" fw="600" color="#000">
            About this Gig
          </Text>
          {!showAll ? (
            <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
              Welcome! I'm Stas Sorokin with over 9 years of experience in the
              Are you looking for a skilled professional to help take your web
              application to the next level with GPT technology? Look no
              further! My name is Stas Sorokin, and I am a seasoned web
              developer with expertise in using Open AI GPT4 to build innovative
              and powerful applications.
            </Text>
          ) : (
            <>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                Are you looking for a skilled professional to help take your web
                application to the next level with GPT technology? Look no
                further! My name is Stas Sorokin, and I am a seasoned web
                developer with expertise in using Open AI GPT4 to build
                innovative and powerful applications.
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                Whether you need a custom API built from scratch or want to
                integrate GPT-4 into your existing application, I have the
                skills and experience to make it happen.
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                So if you want to leverage the power of GPT-4 to take your web
                application to new heights, get in touch.
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                I'm ready to turn your vision into a reality and help your
                business succeed with AI-Powered Technology.
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                Web Application Technologies:
                <ul>
                  <li>NodeJS</li> <li>PHP</li> <li>Python</li>
                  <li>React</li> <p>Angular</p> <li>MongoDB</li>
                </ul>
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                AI-Powered Applications:
                <ul>
                  <li>Medical summaries</li> <li>Article \ Post Analysis</li>
                  <li>Financial reports</li>
                  <li>Investment analysis</li> <li>Reviews Analysis</li>
                  <li>Text summarization</li>
                  <li>Dialogue generation</li>
                  <li>Generate FAQ's</li>
                  <li>Sentiment analysis</li>
                  <li>Generate social media posts</li>
                  <li>Legal document generation</li>
                  <li>And much more</li>
                </ul>
              </Text>
              <Text fs="18px" fw="400" sx={{ margin: "15px 0" }}>
                Why Choose Me?
                <ul>
                  <li>Extensive Experience</li>{" "}
                  <li>Premium Customer Support</li>
                  <li>Client Satisfaction</li>
                  <li>Around The Clock Availability</li> <li>Original Work</li>
                </ul>
              </Text>
            </>
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
      </Box>
    </>
  );
}
