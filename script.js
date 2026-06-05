const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const clickedInsideNav = navMenu.contains(e.target) || menuBtn.contains(e.target);
  if (!clickedInsideNav) navMenu.classList.remove("open");
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sample inquiry form submitted. Connect this to backend later.");
});