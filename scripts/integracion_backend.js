// registro.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forms');
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            const data = {
                name: document.getElementById('nombre').value,
                lastname: document.getElementById('apellidos').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('celular').value,
                password: document.getElementById('password').value
            };
            const res = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            alert(result.message);
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const data = {
                email: document.getElementById('login-email').value,
                password: document.getElementById('login-password').value
            };
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            alert(result.message);
        });
    }

    const citaBtn = document.getElementById('submit');
    if (citaBtn) {
        citaBtn.addEventListener('click', async function () {
            const fecha = document.querySelector('input[type="date"]').value;
            const hora = document.getElementById('horasDisponibles').value;
            const email = prompt("Ingrese su correo electrónico para registrar la cita:");

            const res = await fetch('http://localhost:5000/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, date: fecha, time: hora })
            });
            const result = await res.json();
            alert(result.message);
        });
    }
});
