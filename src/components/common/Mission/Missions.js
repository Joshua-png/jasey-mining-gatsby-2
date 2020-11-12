import React from 'react';
import {MissionData} from './MissionData';
import Mission from './Mission';

export default function Missions(){
    return(
        <div className="site-section" id="next">
          <div className="container">
            <div className="row mb-5 mt-3">
                {
                    MissionData.map(({key,icon,title,passage})=>{
                       return(
                        <Mission key={key} passage = {passage} icon={icon} title={title}/>
                       ) 
                        
                    })
                }
            </div>
          </div> 
        </div>       
    );
}