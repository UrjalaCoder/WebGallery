import React from 'react'
import '../../styles/Generics/GenericInputField.css'

interface TextInputProps {
  inputType: 'text'|'password'|'email';
  onChange: Function;
  id: string;
  value?: string;
  className?: string;
  inputProps: object;
  isError?: boolean;
}

interface ShowButtonProps {
  value: boolean;
  onChange: Function;
}

function ShowButton(props: ShowButtonProps): JSX.Element {
	const { onChange, value } = props
	const classes = `far ${!value ? 'fa-eye' : 'fa-eye-slash'} genericInput-showButton`
	return (
		<i className={classes} onClick={(): void => onChange()}></i>
	)
}

function TextInput(props: TextInputProps): JSX.Element {
	const {
		inputType,
		onChange,
		id,
		value,
		inputProps,
		isError
	} = props

	const [focused, setFocused]: [boolean, Function] = React.useState<boolean>(false)
	const [shown, setShown]: [boolean, Function] = React.useState<boolean>(inputType !== 'password')

	const classString = `genericInput ${isError ? 'genericInput-error' : ''} ${focused ? 'genericInput-focus' : ''}`

	const handleClearButton = (): void => {
		onChange('')
	}

	const handleShowButton = (): void => {
		setShown(!shown)
	}

	const realInputType = shown ? 'text' : 'password'

	return (
		<div className={classString}>
			<input
				id={id}
				type={realInputType}
				className="genericField"
				onFocus={(): void => setFocused(true)}
				onBlur={(): void => setFocused(false)}
				onChange={(e): void => onChange(e.target.value)}
				value={value || ''}
				{...inputProps}
			>
			</input>
			{inputType === 'password' && (
				<ShowButton value={shown} onChange={(): void => handleShowButton()} />
			)}
			<i className="fas fa-backspace" onClick={(): void => handleClearButton()}></i>
		</div>
	)
}

export { TextInput }
