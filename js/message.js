document.getElementById("jobForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // ⭐ Required Access Key
    formData.append("access_key", "fdff9149-19fc-4bf3-8a40-f83b405de0d0");

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await res.json();

    if (data.success) {
        document.getElementById("popup").style.display = "flex";
        this.reset();
    } else {
        alert("Error: " + data.message);
    }
});

// ---------------- POPUP CLOSE ----------------
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

window.onclick = function (e) {
    const popup = document.getElementById("popup");
    if (e.target === popup) popup.style.display = "none";
};