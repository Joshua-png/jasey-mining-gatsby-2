import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';
import HeaderStyle from './header.module.css';
import styled from "styled-components";
import Button from 'react-bootstrap/Button'
import { Link } from "react-scroll";

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
  <section id="home">  
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
                  <Button variant="outline-success" size="lg">
                    <Link
                      to="contact-us"
                      smooth='easeInQuad'
                      duration={1000}
                    >
                      Get In Touch
                    </Link>
                  </Button>
                </div>
                  
              </div>
               
            </div>
            
    </BackgroundImage>
  </section>  
  )
}

export default Header;
 
const StyledH1 = styled.h1`
  font-size : 6rem;

  @media (max-width: 768px) {
    font-size : 3rem;
  }
`
const StyledH3 = styled.h3`
  font-size : 1.2rem;
  margin-bottom: 0;
`