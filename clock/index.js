const secondHandObj = document.querySelector("#second-hand-box");
const secondHandRotateBy = 360 / 60;
function updateSecondHand() {
  secondHandObj.style.transform = `rotate(${new Date().getSeconds() * secondHandRotateBy + 180}deg)`;
}
updateSecondHand();
setInterval(updateSecondHand, 1000);

const minuteHandObj = document.querySelector("#minute-hand-box");
const minuteHandRotateBy = 360 / (60 * 60);
function updateMinuteHand() {
  const date = new Date();
  minuteHandObj.style.transform = `rotate(${(date.getMinutes() * 60 + date.getSeconds()) * minuteHandRotateBy + 180}deg)`;
}
updateMinuteHand();
setInterval(updateMinuteHand, 1000);

const hourHandObj = document.querySelector("#hour-hand-box");
const hourHandRotateBy = 360 / (12 * 60 * 60);
function updateHourHand() {
  const date = new Date();
  hourHandObj.style.transform = `rotate(${((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * hourHandRotateBy + 180}deg)`;
}
updateHourHand();
setInterval(updateHourHand, 1000);