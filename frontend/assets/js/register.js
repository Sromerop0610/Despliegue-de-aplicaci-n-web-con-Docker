document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordRegex.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres, una mayúscula y un número");
            return;
        }

        try {
            const response = await fetch("https://localhost:3000/register", {

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
                alert("Usuario registrado correctamente");
                window.location.href = "login.html";
            } else {
                alert("Error al registrar usuario");
            }

        } catch (error) {
            alert("Error de conexión con el servidor");
            console.log(error);
        }

    });

});