import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => navigate("/")} sx={{ color: "white", ml: 10 }}>
            Vezi toate alimentele
          </Button>
          <Button
            onClick={() => navigate("/produs/rezervate")}
            sx={{ color: "white", ml: 10 }}
          >
            Vezi alimentele rezervate de tine
          </Button>
          <Button
            onClick={() => navigate("/produs/add")}
            sx={{ color: "white", ml: 10 }}
          >
            Adauga aliment
          </Button>

          <Typography sx={{ flexGrow: 1 }}></Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, ml: 2 }}
            onClick={() => {
              const a = document.createElement("a");
              a.target = "_blank";
              a.href =
                "https://www.facebook.com/sharer/sharer.php?u=" +
                window.location.href;
              a.click();
              a.parentElement.removeChild(a);
            }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>

          {!localStorage.getItem("token") && (
            <Button color="inherit" onClick={() => navigate("/signin")}>
              Login
            </Button>
          )}

          {localStorage.getItem("token") && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2, ml: 2 }}
                onClick={() => navigate("/profil")}
              >
                <AccountCircleIcon fontSize="large" />
              </IconButton>
              <Button
                color="inherit"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/signin");
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
