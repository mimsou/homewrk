import { Tabs, Tab, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Nav() {
  const [value, setvalue] = useState({});
  const [serchValue, setSerchValue] = useState("");
  const handleChange = (params) => {
    console.log(params);
  };

  const handleSearch = (e) => {
      console.log(e)
    setSerchValue(e.target.value)
  };

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  return (
    <>
      <Tabs
        sx={{ borderBottom: "1px solid #EDEDED" }}
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        <LinkTab label="Home" href="/drafts" />
        <LinkTab label="Contact" href="/trash" />
        <TextField
          value={serchValue}
          onChange={(e)=>handleSearch(e)}
          sx={{ position: "relative", right: "0" }}
          id="demo-helper-text-misaligned"
          label="Recherche"
        />
      </Tabs>
    </>
  );
}
