
const toast = document.getElementById("toast");
let toastTimer;

function showMessage() {
    showToast("Welcome to NEON Studio!");
}

function explore() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Exploring our features...");
}

function showFeature(name) {
    showToast(name + " selected successfully!");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
