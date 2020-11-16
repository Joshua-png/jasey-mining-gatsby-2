import React from 'react';
import Title from '../common/Title';
import Dots from '../common/Dots';
import { IconContext } from "react-icons";
import { FaMap,FaMapMarkerAlt,FaPhoneAlt,FaMailBulk } from 'react-icons/fa';

export default function ContactInfo(){
    return(
        <section className="site-section bg-light" id="contact-us" >
           <div className="container">
              <div className="mb-5 text-center">
                  <Title text="Contact Us"/>
              </div>
              <Dots />

              <div className="row mb-5">
                <div className="col-md-3 text-center">
                    <div className="mb-4"> 
                        <IconContext.Provider value={{ color: '#04ba32', size:"3rem" }}>   
                            <FaMap />
                        </IconContext.Provider> 
                        <div className="mt-4">Tarkwa, Western Region
                            Ghana
                            Digital Address
                        </div>
                    </div>
                </div>


                <div className="col-md-3 text-center">
                    <div className="mb-4">
                        <IconContext.Provider value={{ color: '#04ba32', size:"3rem" }}>   
                            <FaMapMarkerAlt />
                        </IconContext.Provider> 
                        <div className="mt-4"> P.O Box 19540
                            Accra North
                            Ghana
                        </div>
                    </div>
                </div>


                <div className="col-md-2 text-center">
                    <div className="mb-4">
                        <IconContext.Provider value={{ color: '#04ba32', size:"3rem" }}>   
                            <FaPhoneAlt />
                        </IconContext.Provider>
                        <div  className="text-black mt-4">+233 244132705</div>
                        <div className="text-black">+233 264132705</div>
                    </div>
                </div>

                <div className="col-md-4 text-center">
                    <div className="mb-0">
                        <IconContext.Provider value={{ color: '#04ba32', size:"3rem" }}>   
                            <FaMailBulk />
                        </IconContext.Provider>
                        <div className="text-black mt-4">joseph.wilson-sey@jaseyminingservices.com</div>
                        <div className="text-black">jaseyminingservices@gmail.com</div>
                    </div>
                </div>
                </div>
      </div>
    </section>          
    );
}