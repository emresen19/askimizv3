window.onload = function() {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.container').style.display = 'flex';
    }, 2000);
    const audio = document.getElementById('bgMusic');
    document.body.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    }, { once: true });
};
function startStory() {
    if (confirm("Hazır mısın sevgilim?")) {
        alert("O zaman başlayalım ❤️");
    }
}
