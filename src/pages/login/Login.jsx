import { useState, useEffect } from "react";
import MyNavbar from "../../components/navbar/Navbar";
import "./Login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import isLogin from "../../utils/Utils";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usersInfo, setUsersInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://json-server-master-six.vercel.app/users`).then((response) => setUsersInfo(response.data));
    }, []);

    const submitHandler = () => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("usersInfo", JSON.stringify(usersInfo));
        if (isLogin()) {
            navigate("/panel");
        } else {
            Swal.fire({
                title: "Error!",
                text: "یوزرنیم یا پسورد اشتباه است",
                icon: "error",
                confirmButtonText: "بستن",
            });
        }
    };
    return (
        <>
            <MyNavbar />
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
                        <button type="button" onClick={submitHandler}>
                            login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;
