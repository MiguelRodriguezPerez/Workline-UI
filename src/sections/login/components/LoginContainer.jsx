import { LoginForm } from "./LoginForm"
import '../styles/loginContainer.css'

export const LoginContainer = () => {

  return (
    <main className="login-container">
        <img src="/images/ui/wkFooter.png" alt="logo.png" />
        <LoginForm/>   
    </main>
  )
}
