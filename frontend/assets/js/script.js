document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // REGISTRO
    // =========================
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usuario, password })
            });

            const data = await response.json();
            console.log("REGISTER:", data);
        });
    }

    // =========================
    // LOGIN
    // =========================
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const usuario = document.getElementById("usuario").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usuario, password })
            });

            const data = await response.json();
            console.log("LOGIN:", data);

            if (response.ok) {
                alert("Login correcto");

                // Guardar sesión
                localStorage.setItem("usuario", usuario);

                // Redirigir a libro
                window.location.href = "libro.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("usuario");
            window.location.href = "login.html";
        });
    }
});