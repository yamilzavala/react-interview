import LoginForm from "./components/login/LoginForm";
import User from "./components/user/User";
import UsersTable from "./components/table/UsersTable";
import ClassComponent from "./theory/Class-Component";
import Fc from "./theory/Fc-Component";
import AppFcCustomHook from "./theory/custon-hook/exampleThree/AppFc";
import AppStyled from "./theory/styled-components/basic-sxample/AppStyled";

function App() {

  const handleLogin = (credentials) => {
    console.log('Login with credentials: ', credentials);
  }

  return (
    <div>
      {/* #1 - Login */}
      {/* <h1>Login form</h1>
      <LoginForm onLogin={handleLogin} /> */}

      {/* #2 - Themes */}
      {/* <User/> */}
      
      {/* #3 - table with pagination */}
      {/* <UsersTable /> */}

      {/* theory - class component vs fc components*/}
      {/* <Fc emotion='sadness'/>
      <ClassComponent emotion='happiness'/> */}

      {/* theory - custom hook */}
      {/* <AppFcCustomHook />  */}

      {/* styled components */}
      <AppStyled/>
    </div>
  );
}

export default App;
