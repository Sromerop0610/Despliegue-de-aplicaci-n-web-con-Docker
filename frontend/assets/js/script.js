document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const usuarioInput = document.getElementById("usuario");
        const passwordInput = document.getElementById("password");

        const usuario = usuarioInput.value;
        const password = passwordInput.value;

        // limpiar errores visuales
        usuarioInput.classList.remove("error");
        passwordInput.classList.remove("error");

        try {
            const response = await fetch("http://localhost:3000/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    usuario,
                    password
                })
            });

            if (response.ok) {
                window.location.href = "libro.html";
            } else {
                usuarioInput.classList.add("error");
                passwordInput.classList.add("error");
                alert("Usuario o contraseña incorrectos");
            }

        } catch (error) {
            alert("Error de conexión con el servidor");
            console.log(error);
        }
    });

});