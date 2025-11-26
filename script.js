const correctUsername = "AURA";
        const correctPassword = "V3l0ciTy@N3xus#49!$";

        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("errorMsg");

            if (username === correctUsername && password === correctPassword) {
                window.location.href = "2_dash.html";
            } else {
                errorMsg.style.display = "block";
            }
        }