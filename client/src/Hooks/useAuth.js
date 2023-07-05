import { useContext } from "react";
import AuthContext from "../Components/context/UserContext";


// hooku oluştur
const useAuth = () => {

    return useContext(AuthContext)
}



export default useAuth;