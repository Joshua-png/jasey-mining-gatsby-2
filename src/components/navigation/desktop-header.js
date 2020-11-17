import React from "react";
import {Link} from 'react-scroll';
import {
    Grid,
    Toolbar,
    Button,
} from "@material-ui/core";
import logo from '../../images/logo.jpg';
import {makeStyles} from "@material-ui/styles";
import '../../styles/styles.css';
// import {useRouteMatch} from "react-router-dom";




const DesktopHeader = () => {
    const styles = {
        listStyle: 'none',
        textDecoration: 'none',
    }

    const useStyles = makeStyles(theme => {
        return {
            root: {
                "& .MuiAppBar-colorDefault": {
                  backgroundColor: 'red',
                }
              },
            
            brand: {
                fontSize: 20,
                textDecoration: "none",
                color: "white",
                fontStyle: "italic",
                textShadow: '15px 15px 2px #cccccc'
            },
            link: {
                textDecoration: "none",
                color: "green",
                textTransform: "uppercase",
                width: "100%",
                '&:active':{
                    color:'orange'
                },
                '&:hover': {
                    color: "green",
                }
            },
            green:{
                color:"green",
                '&:active':{
                    color:'orange'
                },
                '&:hover':{
                    color:'orange',
                    textDecoration: 'none',
                }
            },
            orange:{
                color:'orange !important',
            },
            button: {
                backgroundColor: "transparent",
                border: 'none',
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            card: {
                width: 250,
                // backgroundColor: "rgba(0, 0, 0,0.7)"
            },
            icon: {
                color: "white",
                '&:hover': {
                    cursor: "pointer",
                    color: "#cccccc"
                }
            }
        }
    });

    const classes = useStyles();

    return (       
        <Toolbar >
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid item={true} lg={3} container={true} >
                        <Link
                            className={`${classes.brand}`}
                              to="home">
                            <img
                                width={50}
                                height={50}
                                alt="change"
                                src={logo}
                            />
                        </Link>
                </Grid>

                <Grid
                    item={true}
                    container={true}
                    lg={8}
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <strong>     
                               <Link 
                                 className={classes.green} 
                                 activeClass={classes.orange}
                                 to="home" 
                                 smooth='easeInQuad'
                                 duration={1000}
                                 spy={true}
                               >
                                   Home
                               </Link> 
                            </strong>   
                        </Button>
                    </Grid>

                    <Grid item={true}>
                    <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                                
                            <strong className="nav-item" style={styles}>
                               <Link 
                                 className={classes.green} 
                                 activeClass={classes.orange}
                                 to="about-us" 
                                 smooth='easeInQuad'
                                 duration={1000}
                                 spy={true}
                               >
                                   About Us
                               </Link> 
                            </strong>
                        </Button>
                            
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                            <strong className="nav-item" style={styles}>
                                <Link 
                                    className={classes.green} 
                                    activeClass={classes.orange}
                                    to="gallery" 
                                    smooth='easeInQuad' 
                                    duration={1000}
                                    spy={true}
                                >
                                    Gallery
                                </Link> 
                            </strong>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <strong className="nav-item" style={styles}>       
                                 <Link 
                                    className={classes.green} 
                                    activeClass={classes.orange}
                                    to="services" 
                                    smooth='easeInQuad'
                                    duration={1000}
                                    spy={true}
                                >
                                    Services
                                </Link> 
                           </strong>    
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                            <strong className="nav-item" style={styles}>    
                                <Link 
                                    className={classes.green} 
                                    activeClass={classes.orange}
                                    to="contact-us" 
                                    smooth='easeInQuad'
                                    duration={1000}
                                    spy={true}
                                >
                                    contact us
                                </Link> 
                            </strong>   
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>  
    )
}

export default DesktopHeader;
