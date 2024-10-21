import { Navigate } from "react-router-dom";
import isLogin from "../../utils/Utils";
function PrivateRoute({ children }) {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const usersInfo = localStorage.getItem("usersInfo");
    return <>{isLogin(username, password, JSON.parse(usersInfo)) ? children : <Navigate to="/login" />}</>;
}
export default PrivateRoute;
