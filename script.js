document.addEventListener("DOMContentLoaded", () => {
  // Выделение .selectable
  const items = document.querySelectorAll(".selectable");
  items.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("selected");
    });
  });

  // Автопрокрутка вниз при уходе из поля
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

  // Скрытие клавиатуры при тапе вне поля
  document.body.addEventListener("click", (e) => {
    if (!e.target.closest("input") && !e.target.closest("textarea")) {
      inputs.forEach(el => el.blur());
    }
  });
});
  