import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  font-size: 20px;
  font-weight: 800;
  color: ${colors.white};
  padding: 18px;
  transition: color 0.2s, border-colors 0.2s;
  cursor: pointer;

  &:hover {
    color: ${props => props.hover};
    border-color: ${props => props.hover};
  }
`

const Button = ({
  type = 'button',
  text,
  onClick = () => ({}),
  hover = colors.veryLightPink,
  ...props
}) => (
  <StyledButton type={type} onClick={onClick} hover={hover} {...props}>
    {text}
  </StyledButton>
)

export default Button