document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "adminpassword") {
        alert("Login successful");
    } else if (username === "user" && password === "userpassword") {
        alert("Login successful");
    } else {
        alert("Login failed");
    }
});
