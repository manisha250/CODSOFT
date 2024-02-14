//personal details
function openModal(personal_detailsId) {
    var modal = document.getElementById(personal_detailsId);
    modal.style.display = "block";
    }
function closeModal(personal_detailsId) {
    var modal = document.getElementById(personal_detailsId);
    modal.style.display = "none";
    }
    //project
function openModal(projectId) {
    var modal = document.getElementById(projectId);
    modal.style.display = "block";
}
function closeModal(projectId) {
    var modal = document.getElementById(projectId);
    modal.style.display = "none";
}
//model
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
document.getElementById('current-year').innerText = new Date().getFullYear();
  
