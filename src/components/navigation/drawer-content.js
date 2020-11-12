import React from "react";
import Scrollspy from 'react-scrollspy';
import {
    Container,
    Button,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {Link} from "gatsby";
import {makeStyles} from "@material-ui/styles";
import {
    Close,
    ContactPhone,
    Home,
    Info,
    Photo
} from "@material-ui/icons";

const DrawerContent = ({handleClose}) => {
    const styles ={
            textDecoration: "none",
            color: "#333333",
            textTransform: "uppercase",
            '&:hover': {
                color: "#333333"
            },
            fontSize: 16,
            fontWeight: 500,
            listStyle:"none",
    }

    const useStyles = makeStyles(theme => {
        return {
            link: {
                textDecoration: "none",
                color: "#333333",
                textTransform: "uppercase",
                '&:hover': {
                    color: "#333333"
                },
                fontSize: 16,
                fontWeight: 500
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                paddingLeft: 52,
                paddingRight: 52,
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: "#fefefe"
            },
            icon: {
                color: "#018903e0"
            },
            button: {
                paddingTop: 8,
                paddingBottom: 8
            },
            logo: {
                height: 200,
                width: 200,
            },
            gridContainer: {
                height: 250
            },
            summary: {
                marginLeft: -15
            },
            closeButton: {
                backgroundColor: "#018903e0",
                color: "white",
                paddingTop: 4,
                paddingBottom: 4,
                '&:active': {
                    color: "#777777"
                }
            }, closeIcon: {
                color: "#ffffff"
            },
            brand: {
                fontWeight: "bold"
            }
        }
    });

    const classes = useStyles();

    return (
    <Scrollspy
        scrollTargetIds={["section_1"]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
    >     
        <Container className={classes.container}>
            <Grid
                container={true}
                justify="flex-end"
                alignItems="center">
                <Grid item={true}>
                    <Button
                        variant="outlined"
                        className={classes.closeButton}
                        onClick={() => handleClose()}
                        endIcon={<Close className={classes.closeIcon}/>}>
                        Close
                    </Button>
                </Grid>
            </Grid>

            <Grid
                className={classes.gridContainer}
                container={true}
                justify="center"
                alignItems="center">
                <Grid item={true}>
                    <img
                        alt="Jasey Mining logo"
                        className={classes.logo}
                        src={`images/logo1.jpg`}/>
                </Grid>
            </Grid>
            <Grid container={true} justify="center">
                <Grid item={true} xs={12}>
                    <Typography className={classes.brand} align="center" variant="h5">
                        Jasey Mining
                    </Typography>
                </Grid>

                <Grid item={true} xs={12}>
                    <Divider className={classes.divider} variant="fullWidth"/>
                </Grid>

                <Grid item={true} xs={12}>
                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<Home className={classes.icon}/>}>
                        <Link className={classes.link} to="/">
                            Home
                        </Link>
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<Info className={classes.icon}/>}>
                        <li style={styles}>
                            <a href="#section_1" style={{color:'#333333'}}>About Us</a>
                        </li>
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<Photo className={classes.icon}/>}>
                        <li style={styles}>
                            <a href="#section_2" style={{color:'#333333'}}>Gallery</a>
                        </li>
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<ContactPhone className={classes.icon}/>}>
                        <li style={styles}>
                            <a href="#section_3" style={{color:'#333333'}}>Services</a>
                        </li>
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<ContactPhone className={classes.icon}/>}>
                        <li style={styles}>
                            <a href="#section_4" style={{color:'#333333'}}>Contact</a>
                        </li>
                    </Button>
                </Grid>
            </Grid>

        </Container>
    </Scrollspy>    
    )
}

export default DrawerContent;
