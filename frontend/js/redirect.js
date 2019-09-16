$(function() {
    try {
        const token = localStorage.getItem("token");

        if(!token) throw "No token";
        else {
            $.get("/user/session", {token}).fail(() => {
                throw "Invalid token";
            });
        }
    } catch(error) {
        console.error(error);

        window.location.assign("login.html");
    }
});