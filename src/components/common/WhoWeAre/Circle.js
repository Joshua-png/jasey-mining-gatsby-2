import React from 'react';
import  Dialogs  from '../Dialog';
import circle from './circle.module.css';
import j_1 from '../../../images/j_1.jpg';


export default function Circle(){
    return(
    <div className="row pt-3">   
        <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
        <figure className={circle.circleBg}>
          <img src={j_1} className="img-fluid" alt="tractor" />
        </figure>
      </div>

      <div className="col-lg-6 ml-auto">
        <h3 className=" mb-3" style={{color:'#04ba32'}}>Jasey Mining Services Limited (JMSL)</h3>
        <p style={{textAlign: 'justify'}} className={`${circle.lead} mb-2`}>foresaw the need to improve upon the efficiency and effectiveness of the output of blasting operation in Ghana and West Africa as a whole. The company in 2011, working under a franchise agreement,
            introduced a series of new blasting products with its associate technique on the Ghanaian market. Our work has currently expanded from Ghana into the West African sub-region with many numerous happy clients. Based on our experience over
            the years, we offer our customers’ product supplies only and product supplies coupled with support services. The latter ensures the appropriate use of our products, which results in maximum production output. JMSL on-demand provides
            consultancy services that includes auditing and optimization of blasting operations, projects, and operational management of drilling and blasting activities for clients.</p>
        <Dialogs text = {text}/>
        <br /><br /><br /><br /> 
    </div>
   
       
   </div> 
    );
}

// const showElement1 = (e,id) => {
//     // var element = document.getElementById("js");
//     if (document.getElementById(id) && e.target.style.display === "none") {
//         e.target.style.display = "block";
//     } else {
//         e.target.style.display = "none";
//     }
//   }

const text = <div id="js" className="p-4" style={{border: '2px solid #04ba32', borderRadius:'30px'}}>
      <p style={{textAlign: 'justify'}}>Our company is the sole distributor for the popular airbag, BLASTBAG EVO in the West Africa sub-region. BLASTBAG EVO is applicable in both surface and underground operations. JMSL works in partnership with
      RIPLOG, which is a member of the MTI group company in Australia. To authenticate our partnership, kindly follow the link (www.mtigroup.com.au) and check out their partners for the West African region. JMSL also sells: Blast hole liners,
      blast cones, blast balls, survey chains, boom Ute magazines, etc.</p>

      <p style={{textAlign: 'justify'}}>JMSL’s range of products and services allows our clients to optimize their blasting efforts, which leads to an increase in production at the mine pit. We also provide our clients with the opportunity to
      access world-className blasting
      tools, products, techniques, and as well as offer cost-saving as our product and services yields increase efficiency, effectiveness, and reliability.</p>

      <p style={{textAlign: 'justify'}}>Over the years, JMSL has had the opportunity to work with the following clients: Engineers and Planner, Golden Star Resources – Wassa Mine, Newmont Ghana Gold Limited (NGGL – Ahafo Project), Newmont Golden
      Ridge Limited (NGRL – Akyem Project), African Underground Mining Services (AUMS), African Mining Services-Mali, Adamus Resource Limited, Goldfields Tarkwa Mine, Anglogold Ashanti – Iduapriem Mine and many more.

      <br />JMSL believes in long term win-win relationships. It enables us to support our clients through the ups and downs of an ever-changing micro and macroeconomic environment.
      </p>
</div>