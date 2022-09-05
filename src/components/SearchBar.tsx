import { FC, ReactElement, useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

export const SearchBar: FC = (): ReactElement => {
  const [searchQueryString, setSearchQueryString] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQueryString(e.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <form>
          <TextField
            fullWidth
            id="outlined"
            label="Search"
            value={searchQueryString}
            onChange={handleChange}
          />
        </form>
      </Box>
    </>
  );
};
