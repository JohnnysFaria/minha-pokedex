import styled, { css } from 'styled-components'

const CardStyle = styled.div`
  background-color: aquamarine;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Image = styled.img`
    max-width: 100px;
`

const Title = styled.div`
  width: 100%;
  height: 40%;
  border-radius: 10%;
`

export { CardStyle, Image, Title };