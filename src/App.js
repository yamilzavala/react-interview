import LoginForm from "./components/login/LoginForm";
import User from "./components/user/User"

function App() {
  const handleLogin = (credentials) => {
    console.log('Login with credentials: ', credentials);
  }

  return (
    <div>
      {/* #1 - Login */}
      {/* <h1>Login form</h1>
      <LoginForm onLogin={handleLogin} /> */}

      <User/>
      
    </div>
  );
}

export default App;
