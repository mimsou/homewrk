import { Button, CardActions, CardContent, Typography ,Card,Box} from "@mui/material";
import React from "react";
import img from "../../profile.jpg";

export default function Cards(props) {
  return (
    <>
     <Box sx={{ minWidth: "275px" ,margin:"10px" }}>
     <Card variant="outlined">
      <CardContent sx={{display:"flex"}}>

      

        <Box sx={{width:"50%"}}>
              <img src={img} style={{width:"100px"}} />
        </Box>

        <Box>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
         {props.profile.nom}
        </Typography>
   
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.profile.prenom}
        </Typography>
        <Typography variant="body2">
         Age:  {props.profile.age}
          <br />
     
        </Typography>
        </Box>


      </CardContent>
      <CardActions>
        <Button onClick={()=>props.edit(props.profile)} size="small">Editer</Button>
      </CardActions>
      </Card>
      </Box>
    </>
  );
}
