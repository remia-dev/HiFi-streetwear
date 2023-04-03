import { useState } from "react";
import Navigation from "./components/Navigation";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";

// Project is STRICTLY FRONTEND ONLY
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Box width="100%" height="100%">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </BrowserRouter>

      {/*<Footer />*/}
    </>
  );
}

export default App;
