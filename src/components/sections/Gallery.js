import React from 'react';
import {GalleryData} from '../common/Gallery/GalleryData';
import Picture from '../common/Gallery/Picture';
import Dots from '../common/Dots';
import Title from '../common/Title';

export default function Gallery(){
        return(
            <section className="site-section" id="gallery">
                <div className="container">
                    <Title text="Gallery"/>
                    <h2 className="text-center">Projects</h2>
                    <div className="mt-4">
                      <Dots />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                        {
                            GalleryData.map((item) => {
                                return(
                                    <Picture key={item.key} image={item.image} alternate={item.alternate} display={item.display}/>
                                );
                            })
                        }
                     </div>
                   </div>
                </section>  
        );  
    
}