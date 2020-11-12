import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import p_1 from '../../images/p_1.png';
import p_3 from '../../images/p_3.png';
import p_4 from '../../images/p_4.jpg';
import p_9 from '../../images/p_9.png';
import p_11 from '../../images/p_11.jpg';
import p_12 from '../../images/p_12.png';
import styled from 'styled-components';

export default function Clients(){
    return(
        <section className="bg-light site-section testimonial-wrap pb-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Our Clients</h2>
            <Styledp>We appreciate the opportunity of working and building relationships with the following major clients.</Styledp>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider ">
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="testimonial">
              <figure className=" align-items-center justify-content-center">
                  <img src={p_3} alt="p_3" className="img-fluid"/>
              </figure>
           </div>
  </Carousel.Item>
  <Carousel.Item>
     <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
        <img src={p_1} alt="p_1" className="img-fluid" />
        </figure>
     </div>
  </Carousel.Item>
  <Carousel.Item>
          <div className="testimonial">
            <figure className=" align-items-center justify-content-center">
              <img src={p_4} alt="p_5" className="img-fluid" />
            </figure>
          </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
        <img src={p_9} alt="p_9" className="img-fluid" />
        </figure>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <div className="testimonial">
        <figure className=" align-items-center justify-content-center">
            <img src={p_11} alt="p_11" className="img-fluid" />
        </figure>
    </div>
  </Carousel.Item>
  <Carousel.Item>
         <div className="testimonial">
            <figure className=" align-items-center justify-content-center">
              <img src={p_12} alt="p_12" className="img-fluid" />
            </figure>
          </div>
  </Carousel.Item>
</Carousel>
        

      </div>
    </section>
    );
}

const Styledp = styled.p`
  font-size: 20px;
`