import { InputAdornment, TextField } from "@mui/material";
import { SearchIcon } from "../assets/icon/Icons";

function SearchItem({ searchTerm, setSearchTerm }: any) {
  return (
    <TextField
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search Items"
      size="small"
      sx={{
        width: "318px",
        "& .MuiOutlinedInput-root": {
          fontSize: "14px",
          paddingLeft: "10px",
          borderRadius: "5px",
          "& fieldset": {
            borderColor: "#e6ecf0",
          },
          "&:hover fieldset": {
            borderColor: "#e6ecf0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#e6ecf0",
            borderWidth: "1px",
          },
        },
        "& .MuiOutlinedInput-input": {
          padding: "8px 10px 8px 0",
          "&::placeholder": {
            color: "#c4c4c4",
            opacity: 1,
          },
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default SearchItem;
