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
document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("createCastingBtn");
  const viewBtn = document.getElementById("viewProfilesBtn");
  const sendBtn = document.getElementById("sendBroadcastBtn");

  if (createBtn) {
    createBtn.addEventListener("click", () => {
      Telegram.WebApp.showAlert("Кастинг создан (временно без сохранения)");
    });
  }

  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      Telegram.WebApp.showAlert("Анкеты актёров будут здесь позже");
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      Telegram.WebApp.showAlert("Рассылка кастинга отправлена (пока фейк)");
    });
  }
});
