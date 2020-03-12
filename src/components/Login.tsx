import React from 'react'
import { TextInput } from '../components/Generics/GenericTextInput'
import GenericButton from '../components/Generics/GenericButton'
import "../styles/pages/Login.css"

interface LoginProps {
  onSubmit: Function;
}

function Login(props: LoginProps) {

  const [username, setUsername]: any = React.useState<string>('');
  const [password, setPassword]: any = React.useState<string>('');

  const handleSubmit = () => {
    if (username.length > 0 && password.length > 0) {
      props.onSubmit({ username, password })
    }
  }

  return (
    <div>
      <form className="formContainer">
        <TextInput
          onChange={(s: string) => setUsername(s)}
          id="usernameInput"
          inputType="text"
          value={username}
          inputProps={
            { placeholder: "Username" }
          }
        />
        <TextInput
          onChange={(s: string) => setPassword(s)}
          id="passwordInput"
          inputType="password"
          value={password}
          inputProps={
            { placeholder: "Password" }
          }
        />
        <GenericButton onClick={() => console.log("Click")} type="default" text="Click me!" />
      </form>
    </div>
  )
}

export default Login
