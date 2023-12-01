import LoginForm from "./components/login/LoginForm";
import User from "./components/user/User";
import UsersTable from "./components/table/UsersTable";
import ClassComponent from "./theory/Class-Component";
import Fc from "./theory/Fc-Component";
import AppFcCustomHook from "./theory/custon-hook/exampleThree/AppFc";
import AppStyled from "./theory/styled-components/basic-sxample/AppStyled";
import AppStyledResponsive from "./theory/styled-components/responsive/AppStyled"
import AppStyledComponent from "./theory/styled-components/complex-example/AppAstyledComponent";
import StateVsProps from "./theory/state-vs-props/StateVsProps"
import AppMemo from './theory/useMemo/otherExample/AppMemo'
import AppCallback from './theory/useCallback/otherExample/AppCallback';
import UseMemo from "./theory/useMemo/useMemoExample/UseMemo";
import AppAxios from "./theory/axios/App";
import AppHOC from "./theory/hoc/other-example/classComponent/App";
import AppHOCFc from "./theory/hoc/other-example/fcComponent/App";
import AppTheme from "./theory/theme-dark-light/App";
import AppRouter from "./theory/router/AppRouter";
import AppFormik from "./theory/formik/basic-formik/AppFormik";
import AppFormikValidationSchema from "./theory/formik/validation-schema/AppFormik";
import AppFormikComponent from "./theory/formik/formik-as-component/AppFormikComponent";
import AppLazyLoading from "./theory/lazy-loading/AppLazyLoading";
import { AppClass } from "./theory/hooks/useState-useEffect/AppClass";
import { AppFC } from "./theory/hooks/useState-useEffect/AppFC";
import AppUseReducer from "./theory/hooks/useReducer/AppUseReducer";
import AppUseMemo from "./theory/hooks/useMemo/AppUseMemo";
import AppUsecallback from "./theory/hooks/useCallback/AppUsecallback";
import AppUseFetch from "./theory/hooks/customHook/AppUseFetch";
import AppTable from "./theory/table-sorting-filtering/AppTable";

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
      {/* <AppTheme/> */}
      
      {/* #3 - table with pagination */}
      {/* <UsersTable /> */}

      {/* theory - class component vs fc components*/}
      {/* <Fc emotion='sadness'/>
      <ClassComponent emotion='happiness'/> */}

      {/* theory - custom hook */}
      {/* <AppFcCustomHook />  */}

      {/* styled components */}
      {/* <AppStyled/> */}
      {/* <AppStyledComponent/> */}
      {/* <AppStyledResponsive/> */}

      {/* props */}
      {/* <StateVsProps/> */}

      {/* memo */}
      {/* <AppMemo/> */}

      {/* useCallback */}
      {/* <AppCallback/> */}

      {/* useMemo */}
      {/* <UseMemo/> */}

      {/* axios */}
      {/* <AppAxios/> */}

      {/* HOC */}
      {/* <AppHOC/> */}
      {/* <AppHOCFc/> */}

      {/* Router */}
      {/* <AppRouter/> */}

      {/* Formik */}
      {/* <AppFormik/> */}
      {/* <AppFormikValidationSchema/> */}
      {/* <AppFormikComponent/> */}

      {/* Lazy loading */}
      {/* <AppLazyLoading/> */}

      {/* hooks */}
      {/* <AppClass/> */}
      {/* <AppFC/> */}
      {/* <AppUseReducer/> */}
      {/* <AppUseMemo/> */}
      {/* <AppUsecallback/> */}
      {/* <AppUseFetch/> */}

      {/* Table sorting filtering */}
      <AppTable/>
    </div>
  );
}

export default App;
