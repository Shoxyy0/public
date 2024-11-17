document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    if (bookId) {
        try {
            // Pobieranie szczegółów książki
            const response = await fetch(`https://openlibrary.org${bookId}.json`);
            const bookData = await response.json();

            const szczegolyContainer = document.getElementById('szczegoly');
            const coverUrl = bookData.covers 
                ? `https://covers.openlibrary.org/b/id/${bookData.covers[0]}-L.jpg`
                : '/assets/images/brak.png';

            const title = bookData.title || 'Tytuł nieznany';
            const author = bookData.authors && bookData.authors.length > 0
                ? bookData.authors.map(a => a.name).join(', ')
                : 'Autor nieznany';
            const description = bookData.description || 'Brak opisu';
            const rating = bookData.ratings_average || 'Brak oceny';

            // Wyświetlanie szczegółów książki
            szczegolyContainer.innerHTML = `
                <img src="${coverUrl}" alt="Okładka książki" />
                <h1>${title}</h1>
                <p>Autor: ${author}</p>
                <p>Opis: ${description}</p>
                <p>Ocena: ${rating}</p>
            `;
        } catch (error) {
            console.error('Błąd pobierania szczegółów książki:', error);
        }
    } else {
        console.error('Brak ID książki w URL');
    }
});
