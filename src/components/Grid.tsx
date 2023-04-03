import { Box, Typography } from "@mui/material";
import bg from "../assets/8053676.jpg";
import "../styles/Grid.css";
import bg2 from "../assets/8053666.jpg";
import bg3 from "../assets/op.jpg";

export default function Grid() {
  return (
    <>
      <Box sx={{ bgcolor: "black" }}>
        <div className="grid-container">
          <div className="grid1">
            <img
              height="400px"
              width="400px"
              src={bg}
              alt="bg"
              className="center"
            />
          </div>
          <img
            style={{ display: "flex", marginTop: "50px", marginLeft: "26px", border: "10px solid white"}}
            height="300px"
            width="300px"
            src={bg3}
            alt="bg3"
          />
          <div className="grid3">
            <img height="400px" width="400px" src={bg2} alt="bg2" />
          </div>
          {/*
        <div className="grid2">
          <img height="250px" width="250px" src={bg2} alt="bg2" />
        </div>
        <div className="grid3">
            <img height="250px" width="250px"src={bg3} alt="bg3" />


        </div>
        */}
        </div>
      </Box>
    </>
  );
}
