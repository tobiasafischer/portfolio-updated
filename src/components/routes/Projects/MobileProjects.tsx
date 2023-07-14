import React from 'react'
import { Sinai, Dubsado } from '../../shared'
import { Container, TextContainer, ProjectContainer } from './MobileProjects.styled'

const MobileProjects: React.FC = () => (
   <Container>
      <ProjectContainer>
         <a href="https://www.canva.com/design/DAE8q0jyS1A/kLNA_cUsiyYu1fWcdggl8g/view?utm_content=DAE8q0jyS1A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
            <Sinai width="140px" height="178px" />
         </a>
         <TextContainer>
            <h2>Software Engineer at Sinai, Remote</h2>
            <p>
               In my previous role, I built a large-scale feature capable of processing complex data
               for a multi-billion dollar banking customer, resulting in significant time savings
               for both engineering and customer service teams.
            </p>
            <p>
               As a core team member, I set up standards and practices for a new UI library
               implementation and conducted code reviews to maintain high-quality code. I also
               implemented Chromatic for the product team to facilitate UI component hosting and
               review.
            </p>
            <p>
               I optimized the data entry process by developing efficient backend functions and
               implemented repository-wide linting and code formatting to ensure code standards and
               best practices were followed.
            </p>
         </TextContainer>
      </ProjectContainer>
      <ProjectContainer>
         <a href="https://www.dubsado.com/">
            <Dubsado />
         </a>
         <TextContainer>
            <h2>Intermediate Software Developer at Dubsado, Burbank CA</h2>
            <p>
               As the lead front-end developer at Dubsado, I created cutting-edge features to
               enhance the user experience. I designed and implemented a robust login/signup page
               for thousands of users, addressing their needs seamlessly. During the planning and
               development phases, I established syntax, style guides, and a tech stack for
               consistency and efficiency. I successfully transitioned from Angular to React,
               improving performance and scalability. I provided comprehensive documentation and
               tutorials, resolving front-end queries promptly. My contributions accelerated
               development, increasing feature delivery by 20% and reducing development cycle time
               by 15%.
            </p>
         </TextContainer>
      </ProjectContainer>
   </Container>
)

export default MobileProjects
