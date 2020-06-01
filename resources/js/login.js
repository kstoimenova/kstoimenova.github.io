$(document).ready(function() {
    $("#login-btn").click(function(event) {
        let username = $("#username").val()
        let password = $("#password").val()
        const admin = "admin123"

        if (username === admin && password === admin) {
            $("#login-btn").attr("href", "./home-admin.html")
        }
    });
});