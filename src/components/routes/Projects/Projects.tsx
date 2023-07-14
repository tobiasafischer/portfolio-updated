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
               <h2>Software Engineer at Sinai, Remote</h2>
               <p>
                  In my previous role, I built a large-scale feature capable of processing complex
                  data for a multi-billion dollar banking customer, resulting in significant time
                  savings for both engineering and customer service teams.
               </p>
               <p>
                  As a core team member, I set up standards and practices for a new UI library
                  implementation and conducted code reviews to maintain high-quality code. I also
                  implemented Chromatic for the product team to facilitate UI component hosting and
                  review.
               </p>
               <p>
                  I optimized the data entry process by developing efficient backend functions and
                  implemented repository-wide linting and code formatting to ensure code standards
                  and best practices were followed.
               </p>
            </TextContainer>
         }
      />
      <Card
         url="https://www.dubsado.com/"
         icon={<Dubsado />}
         content={
            <TextContainer>
               <h2>Intermediate Software Developer at Dubsado, Burbank CA</h2>
               <p>
                  As the lead front-end developer (official title was Intermediate Software
                  Developer) at Dubsado, I created cutting-edge features to enhance the user
                  experience. I designed and implemented a robust login/signup page for thousands of
                  users, addressing their needs seamlessly.
               </p>
               <p>
                  During the planning and development phases, I established syntax, style guides,
                  and a tech stack for consistency and efficiency. I successfully transitioned from
                  Angular to React, improving performance and scalability.
               </p>
               <p>
                  I provided comprehensive documentation and tutorials to empower the team with the
                  necessary expertise. Being the go-to person for front-end queries, I offered
                  timely resolutions to ensure a smooth development environment.
               </p>
               <p>
                  My contributions accelerated the development timeline, increasing the feature
                  delivery rate by 20%. With my expertise and leadership, collaboration between
                  cross-functional teams improved, reducing the overall development cycle time by
                  15%.
               </p>
            </TextContainer>
         }
      />
   </Container>
)

export default Projects
