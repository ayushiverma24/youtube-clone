import { Box, Stack, Typography } from "@mui/material";
import { Sidebar } from "../Sidebar/Sidebar";

export const Feed = () => {
  return (
    <Stack  sx={{ flexDirection: { sx: "column", md: "row" } }}>
      I am from Feed
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography
          variant="body2"
          sx={{ color: "#fff", mt:1.5 }}
          className="copyright"
        >
          Copyright 2023
        </Typography>
      </Box>
    </Stack>
  );
};
