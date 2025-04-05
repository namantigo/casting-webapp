document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".selectable");
    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("selected");
      });
    });
  });
  
  