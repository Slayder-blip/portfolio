const filterButtons = document.querySelectorAll(".project-filters__button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const matchesFilter =
        selectedFilter === "all" || card.dataset.category === selectedFilter;
      card.hidden = !matchesFilter;
    });
  });
});
