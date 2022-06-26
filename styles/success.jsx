import styled from 'styled-components'
const { motion } = require('framer-motion')

export const Wrapper = styled.div`
  margin: 0rem 5rem;
  @media screen and (max-width: 900px) {
    margin: 0;
  }
`
export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;
  min-height: 80vh;
  justify-content: space-evenly;
  h2 {
    text-align: center;
    margin: 2rem 0;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    cursor: pointer;
    border: none;
  }
  @media screen and (max-width: 900px) {
    padding: 3rem 0;
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1.3rem;
      padding: 0rem 1rem;
    }
    h2 {
      font-size: 1rem;
      padding: 0rem 1rem;
    }
  }
`

export const Address = styled.div`
  font-size: 1rem;
  p {
    margin-top: 0.3rem;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 2rem;
  }
`
export const OrderInfo = styled.div`
  font-size: 1rem;
  p {
    margin-top: 0.4rem;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 2rem;
  }
`
export const InforWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`