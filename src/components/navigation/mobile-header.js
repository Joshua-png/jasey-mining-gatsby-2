import React from "react";
import {Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const MobileHeader = ({handleOpen}) => {

    const handleClick = () => {
        handleOpen();
    }

    const useStyles = makeStyles(theme => {
        return {
            brand: {
                fontWeight: "bold",
                color: "#018903e0"
            },
            link: {
                color: "white"
            },
            menu: {
                color: "#018903e0"
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar variant="regular">
            <Container>
                <Grid container={true} justify="flex-start" alignItems="center" spacing={3}>
                    <Grid item={true}>
                        <Menu className={classes.menu} onClick={handleClick}/>
                    </Grid>

                    <Grid item={true}>
                        <Typography className={classes.brand} variant="body1">Jasey Mining</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default MobileHeader;
