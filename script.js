document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === target);
      });
    });
  });

  const filterBtns = document.querySelectorAll("[data-filter]");
  const foodGroups = document.querySelectorAll(".food-group");

  function applyFilter(value) {
    filterBtns.forEach((b) => {
      b.classList.toggle("active", b.dataset.filter === value);
    });

    foodGroups.forEach((group) => {
      const items = group.querySelectorAll("[data-tags]");
      let visibleCount = 0;
      items.forEach((item) => {
        const tags = item.dataset.tags.split(" ");
        const match = value === "all" || tags.includes(value);
        item.style.display = match ? "" : "none";
        if (match) visibleCount++;
      });
      group.style.display = visibleCount > 0 ? "" : "none";
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });
});
