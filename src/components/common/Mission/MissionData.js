
// import {faHandshake, faRocket, faDesktop} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FaDesktop,FaRocket,FaHandshake } from 'react-icons/fa';

export const MissionData = [
    {
        key:"1",
        icon : <FaHandshake />,
        title : "Our Objective",
        passage :   `Our objective is to provide mining-related firms in Ghana
                    and West Africa with world-class blasting products, consultancy, 
                    and solution services that lead to incremental value addition and cost savings.`,
    },
    {
        key:"2",
        icon : <FaRocket />,
        title : "Our Mission",
        passage : `JMSL team of mining experts works with our clients using the best international 
                   practices and benchmarks, coupled with our clients’ unique challenges, to develop 
                   tailored solutions that grow their businesses.`,
    },
    {
        key:"3",
        icon : <FaDesktop />,
        title : "Our Approach",
        passage : `We believe that to optimize our clients’ blasting activities, site visits,
                   the gathering of data, and continuous interaction allow us to appreciate their 
                   challenges and needs. This approach enables us to build long term win-win
                  solutions and relationships that are sustainable, growth-oriented, and environmentally friendly.`,
    },
] 

