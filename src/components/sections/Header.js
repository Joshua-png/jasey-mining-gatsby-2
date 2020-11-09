import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';
import HeaderStyle from './header.module.css';
import styled from "styled-components";

function Header() {
  const data = useStaticQuery(graphql`
  query {
    background : file(relativePath: {eq: "jm_1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <BackgroundImage
            Tag="section"
            fluid={data.background.childImageSharp.fluid}
            className = {HeaderStyle.header}
          >
            <div className={HeaderStyle.blackOverlay}>
              <div className={HeaderStyle.content}>
                <div className={HeaderStyle.inner}>
                  <StyledH1 className="mb-3">JASEY MINING SERVICES</StyledH1>
                  <StyledH3>Optimizing the blasting experience for our clients</StyledH3>
                </div>
                  
              </div>
               
            </div>
            
    </BackgroundImage>
  )
}

export default Header;
 
const StyledH1 = styled.h1`
  font-size : 6rem;
`
const StyledH3 = styled.h3`
  font-size : 1.2rem;
`