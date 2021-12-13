import { Box } from "@mui/material";
import React from "react";
import Cards from "../card/Cards";

export default function Cardlist(props) {
  const getCards = (lists) => {
    return lists.map((v, i) => {
      return <Cards edit={(p)=>props.edit(p)} key={i} profile={v} />;
    });
  };

  return (<Box sx={{display:"flex",margin:"10px"}}>{getCards(props.list)}</Box>);
}
