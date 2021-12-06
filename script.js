const launch_date = new Date("December 21, 2022 09:30:00");
let dtFormat = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

let days = document.querySelector(".days");
let hours = document.querySelector(".horas");
let minutes = document.querySelector(".minutos");
let seconds = document.querySelector(".segundos");

setInterval(() => {
  const now = new Date();
  let diff = launch_date.getTime() - now.getTime();
  let dtFormated = dtFormat.format(diff);
  days.textContent = dtFormated.substring(0, 2);
  hours.textContent = dtFormated.substring(3, 5);
  minutes.textContent = dtFormated.substring(6, 8);
  seconds.textContent = dtFormated.substring(9);
}, 1000);

let modalContainer = document.querySelector(".modal-container");

let btnOpen = document.querySelector(".open");
btnOpen.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

let btnClose = document.querySelector(".close");
btnClose.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
