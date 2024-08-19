const carousels = document.querySelectorAll(".carrousel-images");

carousels.forEach((carrousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carrousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carrousel.classList.add("active");
    startX = e.pageX - carrousel.offsetLeft;
    scrollLeft = carrousel.scrollLeft;
  });

  carrousel.addEventListener("mouseleave", () => {
    isDown = false;
    carrousel.classList.remove("active");
  });

  carrousel.addEventListener("mouseup", () => {
    isDown = false;
    carrousel.classList.remove("active");
  });

  carrousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carrousel.scrollLeft = scrollLeft - walk;
  });
});

// Funçao p/ mostrar modal do filme

const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    console.log("a");
    modal.style.display = "flex";
    modalImage.src = this.src;
  });
});

const closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};



