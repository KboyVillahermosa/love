function showMessage() {
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    box.style.transform = 'translateY(-50vh)';
    message.style.display = 'block';
}

function hideMessage() {
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    box.style.transform = 'translateY(0)';
    message.style.display = 'none';
}



document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    // Try to play the audio automatically
    audio.play().catch(() => {
        console.log("Autoplay was blocked, waiting for user interaction.");
    });

    // Ensure it plays after user interaction
    document.body.addEventListener("click", function () {
        audio.play();
    });
});
