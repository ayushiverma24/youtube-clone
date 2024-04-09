import { SearchOutlined } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";
export const SearchBar = () => {
  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        placeholder="Search ..."
        className="search-bar"
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
