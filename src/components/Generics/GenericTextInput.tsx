import React from 'react'
import "../../styles/Generics/GenericInputField.css"

interface TextInputProps {
  inputType: 'text'|'password'|'email'
  onChange: Function
  id: string
  value?: string
  className?: string
  inputProps: any
  isError?: boolean
}

interface ShowButtonProps {
  value: boolean
  onChange: Function
}

function ShowButton(props: ShowButtonProps) {
  const { onChange, value } = props
  const classes = `far ${!value ? 'fa-eye' : 'fa-eye-slash'} genericInput-showButton`
  return (
    <i className={classes} onClick={() => onChange()}></i>
  )
}

function TextInput(props: TextInputProps) {
  const {
    inputType,
    onChange,
    id,
    value,
    inputProps,
    isError
  } = props

  const [focused, setFocused]: any = React.useState<boolean>(false)
  const [shown, setShown]: any = React.useState<boolean>(inputType !== 'password')

  const classString = `genericInput ${isError ? "genericInput-error" : ""} ${focused ? "genericInput-focus" : ""}`

  const handleClearButton = () => {
    onChange('')
  }

  const handleShowButton = () => {
    setShown(!shown)
  }

  const realInputType = shown ? 'text' : 'password'

  return (
    <div className={classString}>
      <input
        id={id}
        type={realInputType}
        className="genericField"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        value={value || ''}
        {...inputProps}
      >
      </input>
      {inputType === 'password' && (
        <ShowButton value={shown} onChange={() => handleShowButton()} />
      )}
      <i className="fas fa-backspace" onClick={() => handleClearButton()}></i>
    </div>
  )
}

export { TextInput }
