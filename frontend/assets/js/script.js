document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usuario,
                    password
                })
            });

            const data = await response.json();

            if (data.ok) {
                window.location.href = "libro.html";
            } else {
                alert(data.msg);
            }

        } catch (error) {
            alert("Error de conexión con el servidor");
            console.log(error);
        }

    });

});