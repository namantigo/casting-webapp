document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".apply-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Вы откликнулись на кастинг!");
      // позже сделаем отправку на сервер
    });
  });

  // Получение данных Telegram-пользователя
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand(); // разворачивает WebApp на весь экран
    const user = Telegram.WebApp.initDataUnsafe?.user;
    console.log("Telegram User:", user);
  }
});
  
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      Telegram.WebApp.showAlert("Анкета сохранена (пока только визуально)");
    });
  }
});
