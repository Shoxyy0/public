document.getElementById('szukaj-ksiazki').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = event.target.value;
        window.location.href = `/wyniki-wyszukiwania?q=${query}`;
    }
});