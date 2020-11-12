import React from 'react';
import Title from '../Title';

export default function WhoWeAre(){
    return(
      <section  id="section_1">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
           <Title text="Who we are"/>
            <p style={{textAlign: 'justify'}} className="lead" data-aos="fade-up" data-aos-delay="100">All over the world, mining operations are profoundly affected by the volumes and throughput of the ore exploitation process. In hard rock mining, volumes
              required to maintain a viable mine depends on the drilling and blasting of the ore. Jasey Mining Services Limited (JMSL) provides world-class blasting products, consultancy, and solution services that lead to incremental value addition
              and cost savings with comparatively less impact on the environment.</p>
          </div>
        </div>
    </section>   
    );
}