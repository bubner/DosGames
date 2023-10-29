// Effective code that runs js-dos, which won the Replit Creator Fund
// Sometimes the simplest solutions are the best ones
document.getElementById("selection").addEventListener("submit", (e) => {
    e.preventDefault();
    const game = document.getElementById("gameselector").value;
    if (!confirm(`Load file and start playing: '${game}'?`)) {
        return;
    }
    document.getElementById("selection").style.display = "none";
    Dos(document.getElementById("jsdos")).run(game);
});