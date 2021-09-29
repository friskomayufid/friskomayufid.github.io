import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <Title style={{ marginTop: 20 }}>
          on progress {`(>‿◠)✌`} , please stay tune
        </Title>
      </div>
    </Layout>
  )
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  color: palevioletred;
  border: 5px solid purple;
  padding: 20px;
  margin: 20px;
`

export default IndexPage
