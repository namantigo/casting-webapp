document.addEventListener("DOMContentLoaded", () => {
  // Выделение .selectable
  const items = document.querySelectorAll(".selectable");
  items.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
    });
  });

  // Автопрокрутка вниз при выходе из полей ввода
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(el => {
    el.addEventListener("blur", () => {
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    });
  });
});
  