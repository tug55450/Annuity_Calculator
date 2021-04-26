import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

export default function AnnuityCalculator() {
  const inputRef = useRef();
  const [futureValue, setFutureValue] = useState(null);
  const [formAnnuity, setFormAnnuity] = useState({
    PMT: "",
    N: "",
    i: "",
  });

  const clear = () => {
    setFormAnnuity({
      PMT: "",
      N: "",
      i: "",
    });
    setFutureValue(null);
  };

  console.log("FV: " + futureValue);

  const handleClickEnd = () => {
    const { PMT, N, i } = formAnnuity;
    console.log("PMT: " + PMT);
    console.log("N: " + N);
    console.log("i: " + i);
    setFutureValue(PMT * ((((1 + i) ** N) - 1)/i))
  };

  const handleClickBeg = () => {
    const { PMT, N, i } = formAnnuity;
    console.log("PMT: " + PMT);
    console.log("N: " + N);
    console.log("i: " + i);
    setFutureValue(PMT * ((((1 + i) ** N) - 1)/i) * (1 + i))
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormAnnuity({
      ...formAnnuity,
      [e.target.name]: value,
    });
  };

  return (
    <Grid container spacing={3} style={{display:'flex', padding:'3em', height:'100vh', background:'linear-gradient(to bottom, #0099ff 0%, #ffffff 100%)'}}>
      <Paper 
        style={{
          backgroundColor: "#f8f8ff",
          border: "2px solid black",
          margin: "auto",
          width: "30%",
          color: "white",
          overflow:'hidden',
          padding: '3em',
          textAlign: 'center',
          borderRadius: '30px'
        }}
      >
        <Typography style={{color:'Black'}}>Annuity Calculator</Typography>
        <Grid item>
            <FormControl style={{ paddingBottom: "5px", width: "50%" }}>
              <InputLabel htmlFor="PMT">PMT</InputLabel>
              <Input
                autoFocus
                margin="dense"
                id="PMT"
                name="PMT"
                value={formAnnuity.PMT}
                onChange={handleChange}
                type="number"
                inputRef={inputRef}
              />
            </FormControl>
        </Grid>
        <Grid item>
          <FormControl style={{ paddingBottom: "5px", width: "50%" }}>
            <InputLabel htmlFor="N">N</InputLabel>
            <Input
              margin="dense"
              id="N"
              name="N"
              value={formAnnuity.N}
              onChange={handleChange}
              type="number"
              inputRef={inputRef}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl style={{ paddingBottom: "5px", width: "50%" }}>
            <InputLabel htmlFor="i">i (Enter in Decimals)</InputLabel>
            <Input
              margin="dense"
              id="i"
              name="i"
              value={formAnnuity.i}
              onChange={handleChange}
              type="number"
              inputRef={inputRef}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Button onClick={handleClickBeg} color="primary">
            BEG
          </Button>
          <Button onClick={handleClickEnd} color="primary">
            END
          </Button>
          <Button onClick={clear} color="primary">
            Clear
          </Button>
        </Grid>
        {futureValue ? (
          <Grid item>
            <Typography style={{color:'Black'}}>Future Value of Ordinary Annuity: {futureValue}</Typography>
          </Grid>
        ) : null}
      </Paper>
    </Grid>
  );
}

