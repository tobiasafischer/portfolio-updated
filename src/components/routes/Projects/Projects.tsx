import React from 'react'
import { Card, Sinai, Dubsado } from '../../shared'
import { Container, TextContainer } from './Projects.styled'

const Projects: React.FC = () => (
   <Container>
      <Card
         url="https://sinai.com"
         icon={<Sinai width="280px" height="178px" />}
         content={
            <TextContainer>
               <h2>Full-stack Engineer at Sinai, Remote</h2>
               <p>
                  In my previous role, I was responsible for building a large-scale feature capable
                  of processing hundreds of thousands of complex data for a multi-billion dollar
                  banking customer. This feature saved over 60 hours of engineering time and over
                  100 hours of customer service time per quarter.
               </p>
               <p>
                  As a core team member, I also contributed to setting up the standards and
                  practices for a new UI library implementation and oversaw the code reviews for the
                  initial iterations of the project. I implemented the program Chromatic for the
                  product team to enable secure hosting and review of UI components for any changes
                  to existing features or new components.
               </p>
               <p>
                  I also developed a feature to streamline the data entry process within the
                  application and created and optimized back-end processes by writing DAO, Manager,
                  SQS, and endpoint functions. Finally, I implemented repository-wide linting and
                  code formatting to ensure adherence to code standards and best practices.
               </p>
            </TextContainer>
         }
      />
      <Card
         url="https://www.dubsado.com/"
         icon={<Dubsado />}
         content={
            <TextContainer>
               <h2>Front-end Developer at Dubsado, Burbank CA</h2>
               <p>
                  As the primary front-end developer on my team, I was responsible for creating an
                  exhaustible list of features in addition to a login/signup page used by over 30k
                  users.
               </p>
               <p>
                  I played an integral role in the planning and development of the application,
                  including setting syntax, style guide, tech stack, and development processes.
                  Additionally, I laid the groundwork for rewriting the existing application into
                  React from Angular.
               </p>
               <p>
                  To ensure the success of the project, I wrote extensive documentation and
                  tutorials for training new and existing employees. I was also the first point of
                  contact for front-end related issues throughout the codebase.
               </p>
            </TextContainer>
         }
      />
   </Container>
)

export default Projects
