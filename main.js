

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark');
        darkModeToggle.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
});
