const isLogin = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (!localStorage.getItem("usersInfo")) {
        localStorage.setItem("usersInfo", "[]");
    }
    const usersInfo = JSON.parse(localStorage.getItem("usersInfo"));
    const user = usersInfo.filter((user) => user.userName === username);
    if (user.length && user[0].Password === password) return true;
    else return false;
};
export default isLogin;
