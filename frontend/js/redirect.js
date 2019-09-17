const redirect = () => window.location.assign("/login.html")

$(function() {
    const token = localStorage.getItem("token");

    if(!token) redirect();
    else {
        $.get(`/user/session/${token}`).done(data => console.log(data)).fail(redirect);
    }
});