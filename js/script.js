var modal = document.getElementById("myModal");

var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function () {
  modal.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// code to inject the modal contents for each of projects.

const hoverTextElement = document.getElementById("name");

hoverTextElement.addEventListener('mouseenter', function () {
  hoverTextElement.textContent = '@suppowerrr';
});

hoverTextElement.addEventListener('mouseleave', function () {
  hoverTextElement.textContent = 'Parwat Kunwar'
})
