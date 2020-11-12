import React from "react";
import Scrollspy from 'react-scrollspy';
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
            // up: {
            //     color: "white",
            // },
            // down: {
            //     color: "black"
            // },
            link: {
                textDecoration: "none",
                color: "green",
                textTransform: "uppercase",
                width: "100%",
                '&:hover': {
                    color: "green",
                }
            },
            green:{
                color:"green",
                '&:hover':{
                    color:'orange',
                    textDecoration: 'none',
                }
            },
            orange:{
                color:'red !important',
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

    // const {path} = useRouteMatch();
//active,
    // const [ setActive] = useState("");

    // const handleLinkClicked = (event, link) => {
    //     setActive(link);
    // }

    // useEffect(() => {
    //     setActive(path);
    // }, [path])

    return (
        <Scrollspy
                    // scrollTargetIds={["section_1"]}
                    items={ ['about', 'section_2', 'section_3'] }
                    currentClassName="active"
                    offset={-64}
                    // activeNavClass="is-active"
                    // scrollDuration="1000"
                    // headerBackground="true"
                >           
        <Toolbar >
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid item={true} lg={3} container={true} >
                        <Link
                            className={`${classes.brand}`}
                              to="/">
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
                            <strong className="nav-item" style={styles}>
                               <Link to="/" className={classes.green}>Home</Link>
                            </strong>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                    <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                                
                            <strong className="nav-item" style={styles}>
                               <Link className={classes.green} to="about" smooth={true} duration={1000}>About Us</Link> 
                               {/* <a href="#about" className={classes.green}>About Us</a> */}
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
                                activeClass="orange"
                                to="faq" 
                                smooth='easeInQuad' 
                                duration={1000}
                                spy={true}
                            >
                                Gallery
                            </Link> 
                               {/* <a href="#section_2" className={classes.green}>Gallery</a> */}
                            </strong>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <strong className="nav-item" style={styles}>
                               <a href="#section_3" className={classes.green}>Services</a>
                            </strong>
                        </Button>
                    </Grid>

                    <Grid item={true}>
                        <Button
                            className={classes.button}
                            variant="text"
                            size="small">
                           <strong className="nav-item" style={styles}>
                               <a href="#section_4" className={classes.green}>Contact</a>
                            </strong>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    </Scrollspy>   
    )
}

export default DesktopHeader;
