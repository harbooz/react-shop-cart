import React from 'react'
import { styled } from 'styled-components'

const AddBtn = styled.button`
width: 30px;
height: 30px;
background: #3fd9e5;
border: unset;
margin: 2px;
border-radius: 4px;
font-size: 20px;
line-height: 20px;
&:hover {
    transition: .25s ease;
    opacity: .7;
}
&.remove--item {
    background: #e53f3f;
    color: #FFF;
}

`

function AddButton({handleClick, children, ...attributes}) {
  return (
    <AddBtn handleClick={handleClick} {...attributes}>{children}</AddBtn>
  )
}

export default AddButton