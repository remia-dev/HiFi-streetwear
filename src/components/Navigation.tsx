import React from "react";
import "../styles/Navigation.css";
import {
  Box,
  Typography,
  styled,
  Toolbar,
  AppBar,
  Button,
  IconButton,
  Container,
  colors,
  makeStyles,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import CartMenu from "../pages/CartMenu";






export default function Navigation() {
  // const dispatch = useDispatch();
  // const cart = useSelector((state:CounterState)=>state.cart.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container>
          <Toolbar>
            <Typography
              m="30px 5px 30px 5px"
              variant="h2"
              sx={{ color: "black" }}
            >
              <div className="logo">
              Hi-Fi
              </div>

            </Typography>
            <Typography mt="30px" sx={{ color: "black" }}>
              <div className="logo">
                streetwear
              </div>

            </Typography>
            {/*<Typography ml="auto" sx={{color: "gray"}}>*/}
            <Box ml="auto" sx={{ float: "left"}}>
              <IconButton size="large">
                <ShoppingCartIcon sx={{color: "black"}}/>
              </IconButton>
              <IconButton size="large"
              onClick={()=>navigate(<CartMenu />)}>
                <MenuIcon sx={{color: "black"}}/>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
