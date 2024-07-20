document.addEventListener("DOMContentLoaded", function() {
    const leftHalf = document.getElementById('left-half');
    const rightHalf = document.getElementById('right-half');
    const container = document.getElementById('container');

    rightHalf.addEventListener('animationend', function() {
        container.classList.add('show-invitation');
    });
});