import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SelectQuantity = ({ selectQty, setSelectQty }) => {
  // const [selectQty, setSelectQty] = useState(1);
  // console.log(selectQty);
  const handleQtyChange = (e) => {
    setSelectQty(e.target.value);
  };

  return (
    <Box>
      {/* <FormControl> */}
      <Select value={selectQty} onChange={handleQtyChange}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </Select>
      {/* </FormControl> */}
    </Box>
  );
};

export default SelectQuantity;
