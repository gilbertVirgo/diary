const setError = (target, message) => {
    target.html(message);
}

const setToken = token => {
    localStorage.setItem("token", token);
}