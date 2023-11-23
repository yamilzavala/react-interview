import { useContext } from "react";
import UserTableContext from "../context/user-table-context";

const useUserTableContext = () => {
    return useContext(UserTableContext)
}

export default useUserTableContext