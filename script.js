function updateStats() {
    document.getElementById("varun-kills").textContent = Math.floor(Math.random() * 5000);
    document.getElementById("rikesh-kills").textContent = Math.floor(Math.random() * 5000);
    document.getElementById("abrar-kills").textContent = Math.floor(Math.random() * 5000);
    document.getElementById("soumyajit-kills").textContent = Math.floor(Math.random() * 5000);

    document.getElementById("varun-wins").textContent = Math.floor(Math.random() * 100);
    document.getElementById("rikesh-wins").textContent = Math.floor(Math.random() * 100);
    document.getElementById("abrar-wins").textContent = Math.floor(Math.random() * 100);
    document.getElementById("soumyajit-wins").textContent = Math.floor(Math.random() * 100);
}

setInterval(updateStats, 5000);
