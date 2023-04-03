import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import bg from '../assets/8053666.jpg';

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  return (
    <>
      <Box sx={{
      display:"block",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      position:"fixed",
      zIndex: "10",
      width:"100%",
      height:"100%",
      left:"0",
      top:"0",
      overflow:"auto",
      }}
    >
      <Box sx={{
        position:"fixed",
        right:"0",
        bottom:"0",
        width:"max(400px, 30%)",
        height:"100%",
        backgroundColor:"white"}}
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG</Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
              <Box>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      src={bg}
                      width="123px"
                      height="164px"
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        Item name
                      </Typography>
                      <IconButton>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>Short description</Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid`}
                      >
                        <IconButton>
                          <RemoveIcon />
                        </IconButton>
                        <Typography>Item count</Typography>
                        <IconButton>
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        Item price
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">Total Price</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: "gray",
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}>
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default CartMenu;
