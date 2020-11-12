import React from 'react';
import Title from '../common/Title';
import Dots from '../common/Dots';
import WhatWeDoCards from '../common/WhatWeDo/WhatWeDoCards';
import styled from 'styled-components';

export default function WhatWeDo(){
    return(
        <section className="site-section border-bottom" id="section_3" style={{backgroundColor: '#ebfaeb', paddingbottom: 48}}>
            <div className="container">
                <div className="row mb-5">
                   <div className="col-12 text-center" data-aos="fade">
                       <Title text="What we do" />
                        <Styledp>Jasey Mining Services Limited offering to the market cover.</Styledp>
                   </div>
                </div>
                <Dots />
                <WhatWeDoCards />
              </div> 
         </section>      
        
    );
}

const Styledp = styled.p`
  font-size: 20px;
  margin-bottom: 0;
`