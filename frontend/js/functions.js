const setError = (target, message) => {
    target.text(message);
}

const setToken = token => {
    localStorage.setItem("token", token);
}