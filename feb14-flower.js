function showMessage() {
    const box = document.getElementById('box');
    const message = document.getElementById('message');
    box.style.transform = 'translateY(-50vh)';
    message.style.display = 'block';
    
    // Start heart animation
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖'; // Use heart emoji
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s to 5s
    heart.style.fontSize = Math.random() * 1.5 + 1 + "rem"; // Random size
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
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
