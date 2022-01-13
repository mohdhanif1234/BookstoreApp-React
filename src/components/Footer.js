import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import '../css/Footer.css'

function Footer() {
    return (
        <div className="footer">
      <AppBar position="static" style={{ backgroundColor: "#2E1D1E" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className = "copyright"
          >
            Copyright © 2022, Bookstore Private Limited. All Rights Reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Footer
