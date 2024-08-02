
export default function LoginForm() {
    return (
      <>
        <form id='login-form'>
            <label htmlFor='login-userEmail'>Correo Electrónico</label>
            <input id='login-userEmail' type='email' required/>
            <label htmlFor='login-userPassword'>Contraseña</label>
            <input id='login-userPassword' type='password' required/>
            <button id="login-submitBtn" type='submit'>Enviar</button>
        </form>
      </>
    );
}
  