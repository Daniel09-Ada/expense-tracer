import React from 'react'
import "./Input.css"
import styled from 'styled-components'

const InputStyled = styled.input`
    width: 90%;
    height: 20px;
    padding: 7px;
    font-size: 17px;
    outline: none;


    &:focus{
    border: 3px solid blue;
    }
`

const Input = ({ type , placeholder , value , onChange }) => {
  return (
    <InputStyled onChange={onChange} value={value} type={type} placeholder={placeholder}/>
  )
}

export default Input
