const modal = document.getElementById("dialog");

function showDialog() {
    console.log("running");
    modal.showModal();
    modal.style.display = "flex";
}

function closeModal() {
    modal.close();
    modal.style.display = "none";
}

function openDialog() {
    console.log("running");
    modal.showModal();
    modal.style.display = "flex";
}