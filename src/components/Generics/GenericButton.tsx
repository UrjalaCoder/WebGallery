import React from 'react'
import '../../styles/Generics/GenericButton.css'

interface GenericButtonProps {
  type: 'default'|'error'|'warning';
  onClick: Function;
  text: string;
  buttonProps?: object;
}

export default function GenericButton(props: GenericButtonProps): JSX.Element {
	const { type, onClick, text, buttonProps } = props
	const className = ['genericButton', `genericButton-${type}`].join(' ')

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
		e.preventDefault()
		onClick()
	}

	return (
		<button
			className={className}
			onClick={handleClick}
			{...(buttonProps || {})}
		>
			{text.toUpperCase()}
		</button>
	)
}
