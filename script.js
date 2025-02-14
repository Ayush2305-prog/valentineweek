function checkPassword() {
    let password = document.getElementById("passwordInput").value;
    if (password === "Vanshu" || "vanshu" ) {  // Change "Vanshu" to any secret password
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        document.getElementById("wrongPassword").style.display = "block";
    }
}