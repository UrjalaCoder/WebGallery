import React from 'react'
import "../../styles/Generics/GenericInputField.css"

interface TextInputProps {
  inputType: 'text'|'password'|'email';
  onChange: Function;
  id: string;
  value?: string
  className?: string
  inputProps: any
}

function TextInput(props: TextInputProps) {
  const {
    inputType,
    onChange,
    id,
    value,
    inputProps
  } = props

  return (
    <input
      id={id}
      className="genericInput"
      type={inputType}
      onChange={(e) => onChange(e.target.value)}
      value={value || ''}
      {...inputProps}
    ></input>
  )
}

export { TextInput }
