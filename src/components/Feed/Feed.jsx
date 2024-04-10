import { Box, Stack, Typography } from "@mui/material";
import { Sidebar } from "../Sidebar/Sidebar";
import { Videos } from "../Videos/Videos";
import { fetchFromAPI } from "../../utils/fetchFormAPI";
import { useEffect, useState } from "react";

export const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  
  
useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      console.log("data = ", data);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
          className="copyright"
        >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          marginBottom={2}
          sx={{ color: "white" }}
        >
          {selectedCategory}<span style={{ color: "#F31503" }}> Videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
};
