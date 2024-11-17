window.addEventListener('DOMContentLoaded', () => {
    const loginLink = document.getElementById('loginLink');
    const profileMenu = document.getElementById('profileMenu');

    if (localStorage.getItem('isLoggedIn') === 'true') {
        // Zamiast ustawiania tekstu "Profil", ustawiamy obrazek jako zawartość loginLink
        loginLink.innerHTML = '<img src="/assets/images/profile.png" alt="Profil" style="width: 50px; height: 60px;">';
        loginLink.href = '#'; // Link staje się nieaktywny
        profileMenu.classList.add('logged-in'); // Dodaj klasę logged-in tylko dla zalogowanych
    }

    // Obsługa wylogowania
    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        window.location.href = '/'; // Przeładuj stronę główną po wylogowaniu
    });
});