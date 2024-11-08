// This can be expanded later for image popups or lightbox functionality
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        alert('This is an image of one of Gaudi’s works!');
    });
});
