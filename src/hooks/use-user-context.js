import { useContext } from "react";
import UsersContext from "../context/user-context";

function useUserContext() {
    return useContext(UsersContext)
}

export default useUserContext;