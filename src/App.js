import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./App.css";
import Cardlist from "./components/cardlist/Cardlist";
import Nav from "./components/nav/Nav";

function App() {
  const [open, setopen] = useState(false);
  const handleClose = (params) => {};

  const [Profile, setProfile] = useState([
    {
      id: 1,
      nom: "souheyeb",
      prenom: "Mimouni",
      age: "37",
    },
    {
      id: 2,
      nom: "Rached",
      prenom: "BenKhlifa",
      age: "39",
    },
  ]);

  const edit = (p) => {
    setopen(true);
    console.log(p);
  };

  const handelSave = (params) => {
    setopen(false)
  };

  return (
    <>
      <Nav />
      <Cardlist edit={(p) => edit(p)} list={Profile} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modification</DialogTitle>
        <DialogContent>
        
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nom"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="prenom"
            label="Prenom"
            fullWidth
            variant="standard"
          />

          <TextField
            margin="dense"
            id="age"
            label="age"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handelSave}>Modifier</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
