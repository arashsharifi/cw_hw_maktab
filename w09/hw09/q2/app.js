//nextMeal("5:50 p.m");
function nextMeal(currentTime) {
  const [currentHour, currentMinutAnd_am_pm] = currentTime.split(":");
  const numCurenHour = Number(currentHour);
  const [currentMinute, am_pm] = currentMinutAnd_am_pm.split(" ");
  if (am_pm === "p.m") {
    const timePssAm = numCurenHour + 12;
    const minuteSecond = Number(currentMinute) * 60 * 1000;
    const hourSecond = timePssAm * 1000 * 60 * 60;
    console.log(timePssAm);
    console.log(minuteSecond);
    calcuPm(hourSecond, minuteSecond);
  } else if (am_pm === "a.m") {
    const minuteSecond = Number(currentMinute) * 60 * 1000;
    const hourSecond = Number(currentHour) * 1000 * 60 * 60;
    calcuAm(hourSecond, minuteSecond);
  }
}

function calcuAm(hour, minute) {
  const getHour = hour / 1000 / 60 / 60;
  const getMinute = minute / 1000 / 60;
  console.log(getHour);
  console.log(getMinute);
  const breckFastTime = new Date().setHours(7);
  const lunchTime = new Date().setHours(12);
  const dinnerTime = new Date().setHours(19);

  const setTimer = new Date();
  const year = setTimer.getFullYear();
  const month = setTimer.getMonth();
  const date = setTimer.getDate();

  const getMilisecon = new Date(
    year,
    month,
    date,
    getHour,
    getMinute
  ).getTime();
  // console.log(getMilisecon);
  const calCulateToBreack = getMilisecon - breckFastTime;
  const calCulateTolunch = getMilisecon - lunchTime;
  const calCulateToDinner = getMilisecon - dinnerTime;
  const clL = Math.abs(calCulateTolunch) / 1000 / 60 / 60;
  const clF = Math.abs(calCulateToBreack) / 1000 / 60 / 60;
  const clD = Math.abs(calCulateToDinner) / 1000 / 60 / 60;
  console.log(
    `This is the time left until the time has stopped for breakFast ${parseInt(
      clF
    )}`
  );
  console.log(
    `This is the time left until the time has stopped for lunch ${parseInt(
      clL
    )}`
  );
  console.log(
    `This is the time left until the time has stopped for dinner ${parseInt(
      clD
    )}`
  );
}
function calcuPm(hour, minute) {
  const getHour = hour / 1000 / 60 / 60;
  const getMinute = minute / 1000 / 60;
  console.log(getHour);
  console.log(getMinute);
  const breckFastTime = new Date().setHours(7);
  const lunchTime = new Date().setHours(12);
  const dinnerTime = new Date().setHours(19);

  const setTimer = new Date();
  const year = setTimer.getFullYear();
  const month = setTimer.getMonth();
  const date = setTimer.getDate();

  const getMilisecon = new Date(
    year,
    month,
    date,
    getHour,
    getMinute
  ).getTime();
  console.log(getMilisecon);
  const calCulateToBreack = getMilisecon - breckFastTime;
  const calCulateTolunch = getMilisecon - lunchTime;
  const calCulateToDinner = getMilisecon - dinnerTime;
  const clL = Math.abs(calCulateTolunch) / 1000 / 60 / 60;
  const clF = Math.abs(calCulateToBreack) / 1000 / 60 / 60;
  const clD = Math.abs(calCulateToDinner) / 1000 / 60 / 60;
  console.log(
    `This is the time left until the time has stopped for breakFast ${parseInt(
      clF
    )}`
  );
  console.log(
    `This is the time left until the time has stopped for lunch ${parseInt(
      clL
    )}`
  );
  console.log(
    `This is the time left until the time has stopped for dinner ${parseInt(
      clD
    )}`
  );
}

nextMeal("5:50 a.m");

nextMeal("2:00 p.m");
// nextMeal("12:00 p.m");
