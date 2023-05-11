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
            <h2>Full-stack Engineer at Sinai, Remote</h2>
            <p>
               As a full-stack developer, I built a large-scale feature for a multi-trillion dollar
               bank customer that saved over 60 hours of engineering time and over 100 hours of
               customer service time per year.
            </p>
            <p>
               I also contributed to setting up the standards and practices for a new UI library
               implementation, developed a feature to streamline the data entry process, and created
               and optimized back-end processes. Finally, I implemented repository-wide linting and
               code formatting to ensure adherence to code standards and best practices.
            </p>
         </TextContainer>
      </ProjectContainer>
      <ProjectContainer>
         <a href="https://www.dubsado.com/">
            <Dubsado />
         </a>
         <TextContainer>
            <h2>Dubsado, Burbank CA — Front-end Developer</h2>
            <p>
               Acted as the primary front-end developer within my team for a login/signup page used
               by a user base of 30k+
            </p>
            <p>
               Laid the groundwork for rewriting the existing application into React from angular
            </p>
            <p>
               Held an integral role in the planning and development of the application by setting
               syntax, style guide, tech stack, and development processes Wrote extensive
               documentation and tutorials for training new and existing employees
            </p>
            <p>
               Was the first-point-of-contact for front-end related issues throughout the codebase
            </p>
         </TextContainer>
      </ProjectContainer>
   </Container>
)

export default MobileProjects
