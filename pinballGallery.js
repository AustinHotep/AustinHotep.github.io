document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('section img');
    const modal = document.createElement('div');
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.zIndex = '1000';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    const modalImg = document.createElement('img');
    modalImg.style.maxHeight = '80%';
    modalImg.style.maxWidth = '80%';

    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function() {
            modalImg.src = this.src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});