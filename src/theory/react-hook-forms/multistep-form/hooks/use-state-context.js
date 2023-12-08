import { useContext } from "react";
import {AppStateContext} from '../context/state-context'

export const useAppState = () => {
    return useContext(AppStateContext)
}