document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            alert('Użytkownik został zarejestrowany pomyślnie');
            localStorage.setItem('isLoggedIn', 'true');  // Zapis stanu zalogowania
            window.location.href = '/';          // Przekierowanie do strony głównej
        } else {
            const errorText = await response.text();
            alert(`Błąd: ${errorText}`);
        }
    } catch (error) {
        alert('Wystąpił błąd podczas rejestracji');
        console.error(error);
    }
});




document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();  // Przetwarzanie odpowiedzi JSON
            alert(data.message);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userId', data.userId);  // Poprawnie ustawiony userId
            window.location.href = '/';
        } else {
            alert('Nieprawidłowa nazwa użytkownika lub hasło');
        }
    } catch (error) {
        alert('Wystąpił błąd podczas logowania');
        console.error(error);
    }
});