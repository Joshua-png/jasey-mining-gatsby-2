import React from "react";
import {
    Container,
    Button,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {Link} from "react-scroll";
import {makeStyles} from "@material-ui/styles";
import {
    Close,
    ContactPhone,
    Home,
    Info,
    Photo
} from "@material-ui/icons";
import logo from '../../images/logo.jpg'

const DrawerContent = ({handleClose}) => {
    // const styles ={
    //         textDecoration: "none",
    //         color: "#333333",
    //         textTransform: "uppercase",
    //         '&:hover': {
    //             color: "#333333"
    //         },
    //         fontSize: 16,
    //         fontWeight: 500,
    //         listStyle:"none",
    // }

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
            orange:{
                color:"orange"
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
                backgroundColor: "green",
                color: "white",
                paddingTop: 4,
                paddingBottom: 4,
                '&:active': {
                    color: "#777777"
                }
            }, closeIcon: {
                color: "white"
            },
            brand: {
                fontWeight: "bold"
            }
        }
    });

    const classes = useStyles();

    return (
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
                        src={logo}/>
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
                        onClick={() => handleClose()}
                        fullWidth={false}
                        size="large"
                        startIcon={<Home className={classes.icon}/>}>
                        <Link 
                            className={classes.link} 
                            activeClass={classes.orange}
                            to="home" 
                            smooth='easeInQuad'
                            duration={1000}
                            spy={true}
                            onClick= {()=>handleClose()}
                        >
                             Home
                        </Link> 
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        activeClass={classes.orange}
                        fullWidth={false}
                        size="large"
                        onClick={() => handleClose()}
                        startIcon={<Info className={classes.icon}/>}>
                            
                        <Link 
                           className={classes.link} 
                           activeClass={classes.orange}
                           to="about-us" 
                           smooth='easeInQuad'
                           duration={1000}
                           spy={true}
                           onClick= {()=>handleClose()}
                        >
                           About Us
                        </Link> 
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<Photo className={classes.icon}/>}>
                        <Link 
                           className={classes.link} 
                           activeClass={classes.orange}
                           to="gallery" 
                           smooth='easeInQuad' 
                           duration={1000}
                           spy={true}
                           onClick= {()=>handleClose()}
                        >
                           Gallery
                        </Link> 
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<ContactPhone className={classes.icon}/>}>
                        <Link 
                           className={classes.link}
                           activeClass={classes.orange}
                           to="services" 
                           smooth='easeInQuad'
                           duration={1000}
                           spy={true}
                           onClick= {()=>handleClose()}
                        >
                           Services
                        </Link> 
                    </Button>

                    <Divider className={classes.divider} variant="fullWidth"/>

                    <Button
                        className={classes.button}
                        fullWidth={false}
                        size="large"
                        startIcon={<ContactPhone className={classes.icon}/>}>
                         <Link 
                            className={classes.link}
                            activeClass={classes.orange} 
                            to="contact-us" 
                            smooth='easeInQuad'
                            duration={1000}
                            spy={true}
                            onClick= {()=>handleClose()}
                            >
                               contact us
                        </Link> 
                    </Button>
                </Grid>
            </Grid>

        </Container>   
    )
}

export default DrawerContent;
