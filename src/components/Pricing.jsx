import { Box, Button, ListItemButton, ListItemIcon, ListItemText, Stack, Tab } from "@mui/material";
import React, { useState } from "react";
import Text from "./utils/Text";
import SubscriptionModal from "./SubscriptionModal";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ArrowForward, Check } from "@mui/icons-material";

export default function Pricing() {
  const [bot, setBot] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("1");

  const handleContinue = (item) => {
    setBot(item);
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const packages = [
    {
      id: "1",
      name: "Basic",
      description: "Personal AI APP",
      description2: "Basic AI Powered NLP App",
      amount: "$1,250",
      features: [
        "14 Days Delivery",
        "Unlimited Revisions",
        "2 pages",
        "Design customization",
        "Content upload",
        "Responsive design",
        "Source code",
      ],
    },
    {
      id: "2",
      name: "Standard",
      description: "Advanced AI APP",
      description2: "Advanced AI Application + Development of a UI Dashboard",
      amount: "$4,125",
      features: [
        "21 Days Delivery",
        "Unlimited Revisions",
        "5 pages",
        "Design customization",
        "Content upload",
        "Responsive design",
        "Source code",
      ],
    },
    {
      id: "3",
      name: "Premium",
      description: "Complete AI APP Solution",
      description2:
        "Complete AI Powered APP Solution of Cloud Application + Database Storing + Finetuning (training)",
      amount: "$9,120",
      features: [
        "45 Days Delivery",
        "Unlimited Revisions",
        "10 pages",
        "Design customization",
        "Content upload",
        "Responsive design",
        "Source code",
      ],
    },
  ];

  return (
    <>
      <SubscriptionModal open={open} setOpen={setOpen} bot={bot} />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ border: "1px solid #ccc", borderRadius: "5px" }}>
            <TabList
              onChange={handleChange}
              aria-label="Packages"
              sx={{
                display: "flex", // Change to flex
                gap: "1px",
                borderBottom: "1px solid #ccc",
                width: "100%",
                justifyContent: "space-between", // Add this line
              }}
            >
              {packages.map((item) => (
                <Tab
                  key={item.id}
                  label={item.name}
                  value={item.id}
                  sx={{
                    flex: 1, // Make the tabs fill up space
                    borderBottom: "1px solid #ccc",
                    borderRight: "1px solid #ccc",
                    backgroundColor: "#f9f9f9",
                    "&.Mui-selected": {
                      backgroundColor: "#fff",
                    },
                  }}
                />
              ))}
            </TabList>

            {packages.map((item) => (
              <TabPanel key={item.id} value={item.id}>
                <Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Text fs="16px" color="#222325" fw="bold">
                      {item.description}
                    </Text>
                    <Text fs="16px" color="#404145" fw="400">
                      {item.amount}
                    </Text>
                  </Stack>
                  <Box mt={4}>
                    <Text fs="16px" color="#62646a" fw="400">
                      {item.description2}
                    </Text>
                  </Box>
                  <Box mt={4}>
                    {item.features.map((_item) => (
                      <ListItemButton key={_item} size="small">
                        <ListItemIcon>
                          <Check />
                        </ListItemIcon>
                        <ListItemText primary={_item} />
                      </ListItemButton>
                    ))}
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        width: "100%",
                        color: "#fff",
                        backgroundColor: "#000",
                      }}
                      endIcon={<ArrowForward />}
                      onClick={handleContinue}
                    >
                      Continue
                    </Button>
                  </Box>
                </Box>
              </TabPanel>
            ))}
          </Box>
        </TabContext>
      </Box>
    </>
  );
}
