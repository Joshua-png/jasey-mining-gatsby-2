import React, {useState} from "react";
import Header from "../navigation/header";
import {SwipeableDrawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import DrawerContent from "../navigation/drawer-content";
// import Footer from "../navigation/footer";

const Layouts = ({children}) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const useStyles = makeStyles(theme => {
        return {
            container: {
                // backgroundColor: "rgba(0, 0, 0,0.3)",
                // minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                // paddingTop: 32
            },
            footer: {},
            main: {
                flexGrow: 1,
                // minHeight: '100vh'
            },
            content: {
                // marginTop: 24,
                flexGrow: 1,
                // minHeight: "100vh"
            }
        }
    });

    const classes = useStyles();


    return (
        <div>
            <div className={classes.main}>
                <div>
                    <Header handleOpen={handleOpen}/>
                </div>
                <div className={classes.content}>
                    {children}
                </div>
                {/* <div>
                    <Footer />
                </div> */}
            </div>
            <SwipeableDrawer
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}>
                <DrawerContent handleClose={handleClose}/>
            </SwipeableDrawer>
        </div>
    )
}

export default Layouts;
