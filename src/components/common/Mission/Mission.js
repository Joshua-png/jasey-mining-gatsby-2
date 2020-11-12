import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from "react-icons";
import styled from 'styled-components';

export default function Mission({icon,title,passage}){
    return(
        <div className="col-md-4 text-center pt-3">
       <IconContext.Provider value={{ color: '#04ba32', size:"3rem" }}>   
          <i className= "img-fluid w-25 mb-4">
              {icon}
          </i>
        </IconContext.Provider> 
            <h3 className="card-title">{title}</h3>
            <Styledp>
              {passage}
            </Styledp>
          </div>
    );
}

const Styledp = styled.p`
  text-align: justify;
  font-size: 1rem;
`