document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const usuarioInput = document.getElementById("usuario");
        const passwordInput = document.getElementById("password");

        const usuario = usuarioInput.value;
        const password = passwordInput.value;

        const usuarioCorrecto = "usuario1";
        const passwordCorrecta = "contraseña";

        // Quitar errores previos
        usuarioInput.classList.remove("error");
        passwordInput.classList.remove("error");

        if (usuario === usuarioCorrecto && password === passwordCorrecta) {
            window.location.href = "libro.html";
        } else {
            // Marcar campos incorrectos
            if (usuario !== usuarioCorrecto) {
                usuarioInput.classList.add("error");
            }

            if (password !== passwordCorrecta) {
                passwordInput.classList.add("error");
            }

            alert("Usuario o contraseña incorrectos");
        }
    });

});