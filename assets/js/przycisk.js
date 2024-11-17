// Funkcja do wyświetlania przycisku, gdy użytkownik przewinie 80% strony
window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (scrollPosition > totalHeight * 0.6) { // 80% wysokości strony
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Funkcja do przewijania do góry strony
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
