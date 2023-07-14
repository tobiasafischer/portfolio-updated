import React from 'react'
import { Container, TextContainer } from './AboutMe.styled'
import { Icons } from './Icons'

const AboutMe: React.FC = () => (
   <Container>
      <TextContainer>
         <h2>Who am I?</h2>
         <p>
            {`I am a growth-oriented full-stack engineer with 1 year, 8 months of experience specializing in
            React, GraphQL, and Node. My expertise in these technologies allows me to develop
            efficient and accurate solutions to complex problems.`}
         </p>
         <p>
            {`As a dedicated team member, I am
            committed to contributing to the success of any project I am involved in. With a focus
            on innovation and leadership, I strive to deliver high-quality fullstack features that
            meet and exceed client expectations`}
         </p>
      </TextContainer>
      <Icons />
   </Container>
)

export default AboutMe
