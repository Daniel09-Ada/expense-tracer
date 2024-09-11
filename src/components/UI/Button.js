import React from 'react'
import "./Button.css"
import styled from 'styled-components'

const ButtonStyled = styled.button`
    padding: 15px 20px;
    font-size: 1rem;
    background-color: blue;
    color: white;
    border-radius: 5px;
    border: none;
    font-weight: bold;


    &:hover{
    background-color: chartreuse;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    &:active{
    background-color: red;
    }
`

const Button = ({ children , onClick }) => {

  return (
    <ButtonStyled onClick={onClick} >{children}</ButtonStyled>
  )
}

export default Button
