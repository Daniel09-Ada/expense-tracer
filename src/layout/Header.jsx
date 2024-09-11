import React from 'react'
import "./Header.css"
import Button from '../components/UI/Button'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    width: 100%;
    height: 65px;
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
`

const Header = (props) => {

  return (
    <HeaderStyled>
         <h1>Logo</h1>
        <Button onClick={props.open} >ADD EXPENSES</Button>
    </HeaderStyled>
  )
}

export default Header

