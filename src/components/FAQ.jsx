import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import Text from "./utils/Text";

const FAQ = () => {
  return (
    <Box mt={9}>
      <Text fs="24px" fw="800" color="#000">
        FAQ
      </Text>
      {[
        {
          question: "How do revisions work?",
          answers:
            "If you like to change anything in the integration to make the final result exactly as you envision it, revisions is your friend. Simply put, with revisions, you will be able to request adjustments. Best chance you will already get exactly what you need straight away.",
        },
        {
          question: "What makes you a Fiverr Pro seller?",
          answers:
            "Fiverr Pro sellers are meticulously evaluated for elite performance, only 1% out of Fiverr Pro applications (which are relatively few) are accepted. The following is true: My work is at the highest standard, premium service, satisfied clients, peak level communication skills, available 24/7.",
        },
        {
          question: "What is GPT-4?",
          answers:
            "GPT-4 (Generative Pre-trained Transformer 4) is a language processing AI developed by OpenAI that can perform a wide range of language tasks, including text generation, translation, summarization, and more. It is one of the most powerful language processing AI models currently available.",
        },
        {
          question: "How can GPT-4 be used in app development or integration?",
          answers:
            "There are many potential ways to use GPT-4 in app development or integration. Some examples might include using it to generate marketing copy or creative ideas for advertisements, assist with customer service inquiries, generate learning materials or assist with diagnosis.",
        },
        {
          question:
            "What are some benefits of using GPT-4 in app development or integration?",
          answers:
            "Some potential benefits of using GPT-4 in app development or integration include the ability to automate tasks that would otherwise be time-consuming for humans, or the ability to generate high-quality content or insights quickly and accurately.",
        },
      ].map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Text fw="600" fs="18px" color="#000">{item?.question}</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Text fw="400" fs="16px">{item?.answers}</Text>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
