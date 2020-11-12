import React from 'react';
import {WhatWeDoData} from './WhatWeDoData';
import WhatWeDoCard from './WhatWeDoCard';

export default function WhatWeDoCards(){
    return(
        
         <div className="row rol-cols-1"> 
            {
                WhatWeDoData.map((item) =>{
                    return(
                        <WhatWeDoCard key={item.key} image={item.image} title={item.title} heading1={item.heading1} heading2={item.heading2} paragraph1={item.paragraph1} paragraph2={item.paragraph2} paragraph3={item.paragraph3}/>
                    );
                })
           }
          </div>  
        
    );
}