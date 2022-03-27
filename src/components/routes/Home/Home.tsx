import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   & > * {
      z-index: 1;
   }
`
const TextContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   position: absolute;
   text-align: left;
   width: 100%;
   left: 10%;
   top: 25%;
   h2 {
      font-size: 9rem;
      margin-left: -2px;
   }
   & > h2:first-child {
      margin: 0;
   }
   p {
      font-weight: 400;
      font-size: 4rem;
   }
`

const Image = styled.img`
   border-radius: 5px;
   box-shadow: 5px 5px 20px rgb(0, 0, 0, 0.3);
   position: absolute;
   right: 15%;
   height: 60%;
`

const OrganicShape = styled.div`
   z-index: 0;
   position: absolute;
   display: block;
   width: 50%;
   height: 85%;
   right: 5%;
   background: #c31c3f;
   border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
   animation-name: organic;
   animation-duration: 30s;
   animation-iteration-count: infinite;

   @keyframes organic {
      0% {
         border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
      }
      33% {
         border-radius: 30% 70% 30% 70% / 32% 30% 70% 68%;
      }
      66% {
         border-radius: 70% 30% 70% 30% / 68% 70% 30% 32%;
      }
      100% {
         border-radius: 41% 59% 41% 59% / 43% 45% 55% 57%;
      }
   }
`

const Home: React.FC = () => (
   <Container>
      <TextContainer>
         <h2>Tobias</h2>
         <h2>Fischer</h2>
         <p>FRONTEND DEVELOPER</p>
      </TextContainer>
      <Image src="https://firebasestorage.googleapis.com/v0/b/portolfio.appspot.com/o/PXL_20220311_173105326.jpg?alt=media&token=2a3418a1-977a-4ff4-ac1e-a424ccae3af7" />
      <OrganicShape />
   </Container>
)

export default Home
