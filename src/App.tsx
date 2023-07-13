// @ts-nocheck
import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import { Home, AboutMe, Projects, Contact, MobileProjects, Skate } from './components/routes'
import GlobalStyle from './global'
import { useMediaQuery } from './hooks'

const InnerContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   position: relative;
   height: 100vh;

   width: 100%;
   @media screen and (min-width: 768px) {
      align-items: center;
      height: 100vh;
   }
`
const Container = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   width: 100%;
   height: 100%;
`

const App = () => {
   const { isMobile } = useMediaQuery()

   return (
      <ReactFullpage
         credits={{ enabled: false }}
         licenseKey=""
         scrollingSpeed={400}
         scrollOverflow={true}
         sectionsColor={[]}
         cards={false}
         cardsOptions={{ perspective: 1, fadeContent: false, fadeBackground: false }}
         render={() => (
            <>
               <Container>
                  <div id="home" className="section">
                     <InnerContainer>
                        <Home />
                     </InnerContainer>
                  </div>
                  <div id="aboutme" className="section">
                     <InnerContainer>
                        <AboutMe />
                     </InnerContainer>
                  </div>
                  <div id="skate" className="section">
                     <InnerContainer>
                        <Skate />
                     </InnerContainer>
                  </div>
                  <div id="projects" className="section">
                     <InnerContainer>{isMobile ? <MobileProjects /> : <Projects />}</InnerContainer>
                  </div>
                  {isMobile && (
                     <div id="contact" className="section">
                        <InnerContainer>
                           <Contact />
                        </InnerContainer>
                     </div>
                  )}
                  <GlobalStyle />
               </Container>
            </>
         )}
      />
   )
}

export default App
