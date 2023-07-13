import React from 'react'
import { useSpring } from 'react-spring'
import { Icon } from '../../shared/Icon'
import {
   Container,
   InnerContainer,
   TextContainer,
   Image,
   OrganicShape,
   IconContainer,
} from './Home.styled'
import { Contact } from '../Contact'
import { useMediaQuery } from '../../../hooks'

const Home: React.FC = () => {
   const style = useSpring({
      to: { opacity: 1, y: 0 },
      from: { opacity: 0, y: -10 },
      config: { duration: 750 },
   })
   const { isDesktop } = useMediaQuery()
   return (
      <Container>
         <InnerContainer>
            <TextContainer>
               <h2>Tobias</h2>
               <h2>Fischer</h2>
               <p>FULLSTACK ENGINEER</p>
               {isDesktop && <Contact />}
            </TextContainer>
            <Image src="https://firebasestorage.googleapis.com/v0/b/portolfio.appspot.com/o/IMG_8275-min.jpg?alt=media&token=007572f8-9c74-40a1-a12f-ded3c19929a7" />
            <IconContainer style={style}>
               <p>SEE MORE</p>
               <Icon icon="south" size="25px" color="#f3f4f6" />
            </IconContainer>
         </InnerContainer>
         <OrganicShape />
      </Container>
   )
}
export default Home
