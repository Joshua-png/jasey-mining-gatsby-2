import React from "react";
import {AppBar, Hidden} from "@material-ui/core";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const option = createMuiTheme({
    overrides: {
        MuiAppBar:{
            colorDefault:{
                color: 'transparent !important' ,
                backgroundColor: 'rgba(0,0,0,0.5)',
            }, 
          },
        },
  });

const Header = ({handleOpen}) => {

    return (
    <ThemeProvider theme={option}>   
        <AppBar variant="elevation" elevation={1} square={true} position="fixed" color="default">
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden lgUp={true}>
                <MobileHeader handleOpen={handleOpen}/>
            </Hidden>
        </AppBar>
    </ThemeProvider>   
    )
}

export default Header;
