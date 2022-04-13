import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   height: 100%;
`

export const TextContainer = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   text-align: left;
   width: 40%;
   margin-left: 10%;
   h2 {
      font-size: 4rem;
      margin-left: -2px;
   }
   & > h2:first-child {
      margin: 0;
   }
   p {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 30px;
      margin-top: 10px;
      span {
         color: #ef4444;
      }
   }

   @media screen and (min-width: 768px) {
      h2 {
         font-size: 9rem;
         margin-left: -2px;
      }
      & > h2:first-child {
         margin: 0;
      }
      p {
         font-weight: 400;
         font-size: 3rem;
         line-height: 50px;
         margin-top: 10px;
         span {
            color: #ef4444;
         }
      }
   }
`

export const IconContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
   @media screen and (min-width: 768px) {
      gap: 30px;
      height: 100%;
      flex-direction: column;
   }
`

export const Language = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   svg {
      height: 100px;
   }
   gap: 20px;
   height: 10%;
   @media screen and (max-width: 768px) {
      svg {
         height: 50px;
      }
      width: 40%;
      flex-direction: column;
   }
`
