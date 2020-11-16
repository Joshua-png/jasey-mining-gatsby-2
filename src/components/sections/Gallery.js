import React, { useState} from "react";
import {GalleryData} from '../common/Gallery/GalleryData';
// import Picture from '../common/Gallery/Picture';
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

export default function Gallerys(){

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
            <section className="site-section" id="gallery">
                <div className="container">
                    <Title text="Gallery"/>
                    <h2 className="text-center">Projects</h2>
                    <div className="mt-4">
                      <Dots />
                    </div>
                    <div >
                        <Gallery photos={GalleryData} onClick={handleToggle}/>
                         <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                          {
                            GalleryData.map((x,index) => {
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