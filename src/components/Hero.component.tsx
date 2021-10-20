import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Hero = () => {
  return (
    <Container>
      <Subtitle>Hi Salam Kenal! Nama saya</Subtitle>
      <Title>Frisko Mayufid</Title>
      <Description>
        Seorang Front End Developer dari Indonesia. Hobi main game online dan
        ngoding (pastinya). Kadang sharing pengetahuan dan hal yang lagi
        dipelajari disini.
      </Description>
      <WrapperImage>
        <Link to="https://www.linkedin.com/in/friskomayufid/">
          <Image src="../../linkedin.svg" alt="linkedin" />
        </Link>
        <Link to="https://github.com/friskomayufid">
          <Image src="../../github.svg" alt="github" />
        </Link>
        <Link to="https://www.facebook.com/Friskomayufid/">
          <Image src="../../facebook.svg" alt="facebook" />
        </Link>
        <Link to="https://www.instagram.com/myxxfd/">
          <Image src="../../instagram.svg" alt="instagram" />
        </Link>
      </WrapperImage>
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: -4vw;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 136.34%;
  text-align: center;
  letter-spacing: 0.075em;
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 54px;
  letter-spacing: 0.035em;
  color: #2300ae;
  text-align: center;
  margin-top: 15px;
`
const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 127.34%;
  text-align: center;
  letter-spacing: 0.095em;
  margin-top: 15px;
`
const WrapperImage = styled.div`
  text-align: center;
  margin-top: 20px;
`
const Image = styled.img`
  width: 40px;
  padding: 5px;
`
