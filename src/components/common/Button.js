import React from 'react'
import { styled } from 'styled-components'

const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
max-width: 320px;
width: 100%;
background: #3fd9e5;
border-radius: 4px;
outline: unset;
border: unset;
height: 40px;
margin: 0 auto;
cursor: pointer;
transition: .25s ease;
font-size: 14px;
text-transform: uppercase;
font-weight: 700;
&:hover {
    transition: .25s ease;
    opacity: .9;
}
`

function Button({handleClick, style, children, ...atributes}) {
  return (
    <Btn handleClick={handleClick} {...atributes} style={style}>{children}</Btn>
  )
}

export default Button