import React, { useState} from "react";
import {ProjectData} from '../common/Project/ProjectData';
import Dots from '../common/Dots';
import Title from '../common/Title';
import Gallery from "react-photo-gallery";
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

export default function Project(){

       /*------------------------------------------------------------------------------------------- */

    const [currentImage, setCurrentImage] = useState(0);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
       setOpen(false);
     };

     const handleToggle = (event,{photo,index}) => {
       setCurrentImage(index);  
       setOpen(!open);
     };

        /*------------------------------------------------------------------------------------------- */


        return(
            <section className="site-section" style={{backgroundColor: '#ebfaeb' /*#d0cfcfde;*/ }}>
                 <div className="container">
                    <Title text="Products"/>
                    <div className="mt-4">
                      <Dots />
                    </div>
                     <div>
                         <Gallery photos={ProjectData} onClick={handleToggle}/>
                         <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                          {
                            ProjectData.map((x,index) => {
                                if(index === currentImage){
                                    return(
                                     <div key={x.key} className="m-3">   
                                        <Styledp key={x.key}>{x.display}</Styledp>
                                      </div> 
                                    );
                                }
                              
                                return null;
                            
                            })
                          }
                         </Backdrop>
                     </div>
                   </div>
                </section>  
        );  
    
}


const Styledp = styled.p`
  font-size: 20px;
  padding: 20px;
  color: black;
  background-color: white;
  text-align: justify;
`