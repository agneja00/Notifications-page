const notificationsNumber = document.querySelector(".main__header-notifications");
const readBtn = document.querySelector(".main__header-btn");
const notifications = document.querySelectorAll(".notification");

let count = 3;

const removeDots = (element) => {
  const dot = element.querySelector(".notification__dot");
  if (dot) {
    dot.remove();
  }
};

const updateCountAndDisplay = () => {
  count--;
  notificationsNumber.textContent = count;
  if (count === 0) {
    notificationsNumber.style.display = "none";
  }
};

readBtn.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
    notificationsNumber.style.display = "none";
    removeDots(notification);
  });
});

notifications.forEach((notification) => {
  notification.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("unread")) {
      event.currentTarget.classList.remove("unread");
      removeDots(event.currentTarget);
      updateCountAndDisplay();
    }
  });
});
