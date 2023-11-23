import LoginForm from "./components/login/LoginForm";

function App() {
  const handleLogin = (credentials) => {
    console.log('Login with credentials: ', credentials);
  }

  return (
    <div>
      <h1>Login form</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
