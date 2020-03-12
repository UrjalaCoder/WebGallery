import React from 'react'
import "../../styles/Generics/GenericButton.css"

interface GenericButtonProps {
  type: 'default'|'error'|'warning'
  onClick: Function
  text: string
  buttonProps?: any
}

export default function GenericButton(props: GenericButtonProps) {
  const { type, onClick, text, buttonProps } = props;
  const className = ["genericButton", `genericButton-${type}`].join(" ")

  const handleClick = (e: any) => {
    e.preventDefault()
    onClick()
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      {...(buttonProps || {})}
    >
      {text.toUpperCase()}
    </button>
  )
}
